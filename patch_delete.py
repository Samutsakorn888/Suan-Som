import re
import sys

def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add deleteImageFromStorage helper after compressImage
    helper_code = '''  const deleteImageFromStorage = async (url: string) => {
    if (!url || !url.includes('supabase.co')) return;
    try {
      const parts = url.split('/');
      const fileName = parts[parts.length - 1];
      if (fileName) {
        await supabase.storage.from('room-images').remove([fileName]);
        console.log('Deleted from storage:', fileName);
      }
    } catch (err) {
      console.error('Failed to delete image from storage', err);
    }
  };'''

    # Insert it after compressImage function ends
    start_helper_idx = content.find('  // Image Upload handler for Room')
    if start_helper_idx == -1:
        print('Could not find marker for helper_code')
        sys.exit(1)
    
    if 'deleteImageFromStorage' not in content:
        content = content[:start_helper_idx] + helper_code + '\n\n' + content[start_helper_idx:]

    # 2. Update handleDeleteRoom to delete main image and gallery images
    target_delete_logic = '''const handleDeleteRoom = async () => {
  if (!window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบประเภทห้องนี้?')) return;
  const isDaily = selectedRoomTab === 'daily';
  const targetList = isDaily ? [...(localData.dailyRooms || [])] : [...(localData.monthlyRooms || [])];
  const roomToDelete = targetList[selectedRoomIdx];

  try {
  const roomId = isDaily ? roomToDelete.key : roomToDelete.id;
  const isNewRoom = String(roomId).startsWith('custom_') || typeof roomId === 'number';

  if (!isNewRoom) {
  const { error } = await supabase.from('room').delete().eq('id', roomId);
  if (error) throw error;
  }

  // Delete images from storage
  if (roomToDelete.image) {
    await deleteImageFromStorage(roomToDelete.image);
  }
  if (roomToDelete.images && roomToDelete.images.length > 0) {
    for (const imgUrl of roomToDelete.images) {
      await deleteImageFromStorage(imgUrl);
    }
  }

  targetList.splice(selectedRoomIdx, 1);'''
    
    old_delete_logic_pattern = re.compile(r'const handleDeleteRoom = async \(\) => \{.*?targetList\.splice\(selectedRoomIdx, 1\);', re.DOTALL)
    
    if not old_delete_logic_pattern.search(content):
        print('Could not find handleDeleteRoom pattern')
        sys.exit(1)

    content = re.sub(old_delete_logic_pattern, target_delete_logic, content)

    # 3. Update Gallery image removal (onClick button)
    # Search for the exact onClick block.
    old_gallery_pattern = re.compile(r'onClick=\{\(\) => \{\s*const newArr = \[\.\.\.editRoom\.images\];\s*newArr\.splice\(idx, 1\);\s*setEditRoom\(\{ \.\.\.editRoom, images: newArr \}\);\s*\}\}', re.DOTALL)

    new_gallery_remove = '''onClick={() => {
     const imgUrlToRemove = editRoom.images[idx];
     if (imgUrlToRemove) {
       deleteImageFromStorage(imgUrlToRemove);
     }
     const newArr = [...editRoom.images];
     newArr.splice(idx, 1);
     setEditRoom({ ...editRoom, images: newArr });
   }}'''

    if old_gallery_pattern.search(content):
        content = re.sub(old_gallery_pattern, new_gallery_remove, content)
    else:
        print('Gallery removal pattern not found or already patched.')

    # 4. Update Main image upload to delete old image before replacing
    old_main_pattern = re.compile(r'setEditRoom\(\(prev: any\) => \(\{ \.\.\.prev, image: data\.publicUrl \}\)\);', re.DOTALL)

    new_main_upload_inner = '''setEditRoom((prev: any) => {
            if (prev.image) deleteImageFromStorage(prev.image);
            return { ...prev, image: data.publicUrl };
          });'''
          
    if old_main_pattern.search(content):
        content = re.sub(old_main_pattern, new_main_upload_inner, content)
    else:
        print('Main image upload pattern not found or already patched.')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Patched successfully')

patch_file('src/components/admin/AdminEditModal.tsx')

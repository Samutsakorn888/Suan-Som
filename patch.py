import sys

def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the block from compressImage to the end of handleGalleryUpload
    start_idx = content.find('  // Image Compression Helper')
    end_idx = content.find('  const handleToggleFeature =')

    if start_idx == -1 or end_idx == -1:
        print('Could not find target blocks')
        sys.exit(1)

    replacement = '''  // Image Compression Helper (Returns Blob for Supabase Storage)
  const compressImage = (file: File, callback: (blob: Blob | null) => void) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        const max_size = 800;

        if (width > height) {
          if (width > max_size) {
            height *= max_size / width;
            width = max_size;
          }
        } else {
          if (height > max_size) {
            width *= max_size / height;
            height = max_size;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          callback(blob);
        }, 'image/jpeg', 0.6);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Image Upload handler for Room
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editRoom) {
      compressImage(file, async (blob) => {
        if (!blob) return;
        try {
          const fileName = `main_${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
          const { error } = await supabase.storage.from('room-images').upload(fileName, blob, { contentType: 'image/jpeg' });
          if (error) throw error;
          
          const { data } = supabase.storage.from('room-images').getPublicUrl(fileName);
          setEditRoom((prev: any) => ({ ...prev, image: data.publicUrl }));
        } catch (err) {
          console.error('Error uploading image:', err);
          alert('เกิดข้อผิดพลาดในการอัปโหลดรูปลง Storage (โปรดเช็คว่าเปิด Public และ Policies หรือยัง)');
        }
      });
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && editRoom) {
      const newImages = Array.from(files);
      
      const uploadPromises = newImages.map(file => {
        return new Promise<string>((resolve) => {
          compressImage(file, async (blob) => {
            if (!blob) { resolve(''); return; }
            try {
              const fileName = `gallery_${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
              const { error } = await supabase.storage.from('room-images').upload(fileName, blob, { contentType: 'image/jpeg' });
              if (error) throw error;
              
              const { data } = supabase.storage.from('room-images').getPublicUrl(fileName);
              resolve(data.publicUrl);
            } catch (err) {
              console.error('Error uploading gallery image:', err);
              resolve('');
            }
          });
        });
      });

      const uploadedUrls = (await Promise.all(uploadPromises)).filter(url => url !== '');
      if (uploadedUrls.length > 0) {
        setEditRoom((prev: any) => ({ ...prev, images: [...(prev.images || []), ...uploadedUrls] }));
      }
    }
  };

'''
    new_content = content[:start_idx] + replacement + content[end_idx:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Patched successfully')

patch_file('src/components/admin/AdminEditModal.tsx')

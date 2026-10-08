const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://hptfgaoxnkqjkrfjehbr.supabase.co';
const supabaseKey = 'sb_publishable_cbG2EPnpCg_QpzXPLYpK-A_9XwwVhNk';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  console.log('--- CHECKING STORAGE BUCKET ---');
  const { data: files, error: filesError } = await supabase.storage.from('room-images').list();
  if (filesError) {
    console.error('Error listing files:', filesError);
  } else {
    console.log(`Found ${files.length} files in room-images bucket.`);
    if (files.length > 0) {
      console.log(files.slice(0, 5).map(f => f.name));
    }
  }

  console.log('\n--- CHECKING ROOM DATABASE ---');
  const { data: rooms, error: dbError } = await supabase.from('room').select('id, name, image_url').limit(3);
  if (dbError) {
    console.error('Error querying rooms:', dbError);
  } else {
    console.log(`Found ${rooms.length} rooms.`);
    rooms.forEach(r => {
      console.log(`Room: ${r.name}`);
      if (r.image_url) {
        console.log(`Image URL length: ${r.image_url.length} chars`);
        if (r.image_url.length < 500) {
          console.log(`Value: ${r.image_url}`);
        } else {
          console.log(`Value: (Likely Base64 string...)`);
        }
      } else {
        console.log('No image_url');
      }
    });
  }
}

check();

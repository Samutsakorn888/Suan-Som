import sys, re

with open('src/i18n/translations.ts', 'r', encoding='utf-8') as f:
    text = f.read()

def replacer(match):
    original_list = match.group(1)
    if original_list.endswith(','):
        prefix = original_list
    else:
        prefix = original_list + ','
        
    return prefix + '''
            { icon: "📍", title: "สถานที่เพิ่มเติม 1 (รอกรอกข้อมูล)", distance: "-", desc: "คำอธิบาย 1" },
            { icon: "📍", title: "สถานที่เพิ่มเติม 2 (รอกรอกข้อมูล)", distance: "-", desc: "คำอธิบาย 2" },
            { icon: "📍", title: "สถานที่เพิ่มเติม 3 (รอกรอกข้อมูล)", distance: "-", desc: "คำอธิบาย 3" },
            { icon: "📍", title: "สถานที่เพิ่มเติม 4 (รอกรอกข้อมูล)", distance: "-", desc: "คำอธิบาย 4" },
            { icon: "📍", title: "สถานที่เพิ่มเติม 5 (รอกรอกข้อมูล)", distance: "-", desc: "คำอธิบาย 5" }
        ],'''

pattern = r'(nearbyList:\s*\[[\s\S]*?(?=\],\n\s*faqTitle))\]\,'
new_text = re.sub(pattern, replacer, text)

with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Done adding placeholders')

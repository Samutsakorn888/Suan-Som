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
        securityTitle: "ระบบรักษาความปลอดภัย",
        securitySubtitle: "เพื่อความอุ่นใจในการพักอาศัย",
        securityList: [
            { badge: "-", title: "ระบบรักษาความปลอดภัย 1 (รอกรอกข้อมูล)", desc: "คำอธิบาย 1" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 2 (รอกรอกข้อมูล)", desc: "คำอธิบาย 2" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 3 (รอกรอกข้อมูล)", desc: "คำอธิบาย 3" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 4 (รอกรอกข้อมูล)", desc: "คำอธิบาย 4" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 5 (รอกรอกข้อมูล)", desc: "คำอธิบาย 5" }
        ],'''

pattern = r'(nearbyList:\s*\[[\s\S]*?(?=\],\n\s*faqTitle))\]\,'
new_text = re.sub(pattern, replacer, text)

with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Done adding security placeholders')

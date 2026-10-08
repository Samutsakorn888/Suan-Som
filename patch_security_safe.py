import sys, re

with open('src/i18n/translations.ts', 'r', encoding='utf-8') as f:
    text = f.read()

def replacer(match):
    indent = match.group(1)
    return indent + '''securityTitle: "ระบบรักษาความปลอดภัย",
        securitySubtitle: "เพื่อความอุ่นใจในการพักอาศัย",
        securityList: [
            { badge: "-", title: "ระบบรักษาความปลอดภัย 1 (รอกรอกข้อมูล)", desc: "คำอธิบาย 1" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 2 (รอกรอกข้อมูล)", desc: "คำอธิบาย 2" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 3 (รอกรอกข้อมูล)", desc: "คำอธิบาย 3" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 4 (รอกรอกข้อมูล)", desc: "คำอธิบาย 4" },
            { badge: "-", title: "ระบบรักษาความปลอดภัย 5 (รอกรอกข้อมูล)", desc: "คำอธิบาย 5" }
        ],''' + indent + match.group(2)

pattern = r'(\n\s+)(faqTitle:\s*")'
new_text = re.sub(pattern, replacer, text)

with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Done adding security placeholders safely')

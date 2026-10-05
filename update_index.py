import os

def update_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        code = f.read()

    old_script = """<script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'th', includedLanguages: 'th,en,zh-CN,my', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }
  </script>"""

    new_script = """<script type="text/javascript">
    (function() {
      if (document.cookie.indexOf('googtrans=') === -1) {
        var lang = navigator.language.toLowerCase();
        var targetLang = 'th';
        if (lang.startsWith('en')) targetLang = 'en';
        else if (lang.startsWith('zh')) targetLang = 'zh-CN';
        else if (lang.startsWith('my')) targetLang = 'my';
        
        if (targetLang !== 'th') {
          document.cookie = 'googtrans=/th/' + targetLang + '; path=/';
        }
      }
    })();
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'th', includedLanguages: 'th,en,zh-CN,my', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }
  </script>"""

    code = code.replace(old_script, new_script)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(code)

update_index()

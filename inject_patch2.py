import os

def update_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        code = f.read()

    old_script = """    }
  </script>
</head>"""

    new_script = """      const originalReplaceChild = Node.prototype.replaceChild;
      Node.prototype.replaceChild = function(newChild, oldChild) {
        if (oldChild.parentNode !== this) {
          if (console) {
            console.warn('React+Translate Fix: Cannot replace a child from a different parent', oldChild, this);
          }
          return oldChild;
        }
        return originalReplaceChild.apply(this, arguments);
      };
    }
  </script>
</head>"""

    code = code.replace(old_script, new_script)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(code)

update_index()

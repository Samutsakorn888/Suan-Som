import os

def update_index():
    with open('index.html', 'r', encoding='utf-8') as f:
        code = f.read()

    monkey_patch = """
  <!-- Fix React + Google Translate Crash -->
  <script>
    if (typeof Node === 'function' && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function(child) {
        if (child.parentNode !== this) {
          if (console) {
            console.warn('React+Translate Fix: Cannot remove a child from a different parent', child, this);
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function(newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.warn('React+Translate Fix: Cannot insert before a reference node from a different parent', referenceNode, this);
          }
          referenceNode = null;
        }
        return originalInsertBefore.apply(this, arguments);
      };
    }
  </script>
</head>"""

    code = code.replace('</head>', monkey_patch)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(code)

update_index()

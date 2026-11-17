import glob
from html.parser import HTMLParser

void_elements = {
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
}

class TagValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() not in void_elements:
            self.stack.append(tag.lower())

    def handle_endtag(self, tag):
        tag_lower = tag.lower()
        if tag_lower in void_elements:
            return
        if not self.stack:
            self.errors.append(f"Unexpected closing tag </{tag}>")
            return
        if self.stack[-1] == tag_lower:
            self.stack.pop()
        else:
            # Check if tag is in stack
            if tag_lower in self.stack:
                while self.stack and self.stack[-1] != tag_lower:
                    unclosed = self.stack.pop()
                    self.errors.append(f"Unclosed tag <{unclosed}> before </{tag}>")
                if self.stack:
                    self.stack.pop()
            else:
                self.errors.append(f"Mismatched closing tag </{tag}>, expected </{self.stack[-1]}>")

files = sorted(glob.glob('*.html'))
total_errors = 0
for f in files:
    validator = TagValidator()
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    validator.feed(content)
    if validator.errors or validator.stack:
        print(f"=== {f} ERRORS ===")
        for e in validator.errors[:5]:
            print("  ", e)
        if validator.stack:
            print("   Unclosed at EOF:", validator.stack)
        total_errors += len(validator.errors) + len(validator.stack)

if total_errors == 0:
    print(f"ALL {len(files)} HTML FILES ARE 100% VALID! NO MISMATCHED TAGS.")
else:
    print(f"Total issues: {total_errors}")

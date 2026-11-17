import glob
import re

for f in sorted(glob.glob('*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find section before footer
    footer_idx = c.find('<footer')
    if footer_idx != -1:
        # find last <section> before footer
        sec_idx = c.rfind('<section', 0, footer_idx)
        if sec_idx != -1:
            sec_header = c[sec_idx:c.find('>', sec_idx)+1]
            print(f"{f:25} -> {sec_header}")

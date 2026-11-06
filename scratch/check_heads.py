import glob

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))
print(f"Total HTML files: {len(html_files)}")
for f in html_files:
    fname = f.split('\\')[-1]
    c = open(f, encoding='utf-8').read()
    head_pos = c.find('<head>')
    if head_pos == -1:
        print(f"WARNING: {fname} has no <head>!")
    else:
        # Check first 5 lines of head
        head_lines = c[head_pos:head_pos+300].split('\n')
        print(f"{fname}: {head_lines[1].strip() if len(head_lines)>1 else ''}")

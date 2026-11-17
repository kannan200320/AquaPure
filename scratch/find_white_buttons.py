import glob
import re

for f in sorted(glob.glob('*.html')):
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    # find all <a> or <button> with bg-white
    matches = re.findall(r'(<(?:a|button)[^>]+class=["\'][^"\']*bg-white[^"\']*["\'][^>]*>(?:(?!</(?:a|button)>).)*?</(?:a|button)>)', c, re.DOTALL)
    if matches:
        print(f"=== {f} ({len(matches)} matches) ===")
        for m in matches:
            # clean text
            text = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', m)).strip()
            # extract href
            href = re.search(r'href=["\']([^"\']+)["\']', m)
            h = href.group(1) if href else ''
            # extract class
            cls = re.search(r'class=["\']([^"\']+)["\']', m)
            cl = cls.group(1) if cls else ''
            print(f"  [{h}] '{text[:40]}': {cl[:80]}")

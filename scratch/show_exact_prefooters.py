import re

def print_prefooter(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        c = f.read()
    idx = c.find('<footer')
    s_idx = c.rfind('<section', 0, idx)
    print(f"=== {filename} ===")
    print(c[s_idx:idx])

for fn in ['about.html', 'services.html', 'pricing.html', 'home-family.html', 'service-details.html', 'amc-membership.html', 'blog.html', 'book-service.html', 'contact.html']:
    print_prefooter(fn)

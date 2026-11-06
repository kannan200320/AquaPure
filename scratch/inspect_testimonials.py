import re

for fname in ['about.html', 'services.html', 'pricing.html', 'book-service.html', 'amc-membership.html']:
    content = open(rf'c:\Users\KANNAN\Desktop\AquaPure\{fname}', encoding='utf-8').read()
    print(f"=== {fname} ===")
    for keyword in ['testimonial', 'feedback', 'review', 'quote', 'Rajeev', 'Ananya', 'Sharma', 'Naveen']:
        for m in re.finditer(re.escape(keyword), content, re.I):
            idx = m.start()
            print(f"Found {keyword} at {idx}:")
            print(content[max(0, idx-100):min(len(content), idx+200)])
            print("-" * 30)
            break

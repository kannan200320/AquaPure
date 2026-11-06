c = open(r'c:\Users\KANNAN\Desktop\AquaPure\login-register.html', encoding='utf-8').read()
for term in ['testimonial', 'avatar', 'quote', 'review', 'rating']:
    idx = c.lower().find(term)
    if idx != -1:
        print(f"Found {term} at {idx}:")
        print(c[max(0, idx-50):min(len(c), idx+200)])

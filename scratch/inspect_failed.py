c = open(r'c:\Users\KANNAN\Desktop\AquaPure\amc-membership.html', encoding='utf-8').read()
idx = c.find('VERIFIED AMC MEMBER TESTIMONIALS')
print("=== amc-membership.html ===")
print(c[idx:idx+2000])

c2 = open(r'c:\Users\KANNAN\Desktop\AquaPure\book-service.html', encoding='utf-8').read()
idx2 = c2.find('VERIFIED CUSTOMER REVIEWS')
print("\n=== book-service.html ===")
print(c2[idx2:idx2+2000])

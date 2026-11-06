c = open(r'c:\Users\KANNAN\Desktop\AquaPure\amc-membership.html', encoding='utf-8').read()
idx = c.find('What Long-Term AMC Members Say')
print(c[idx:idx+3000])

c2 = open(r'c:\Users\KANNAN\Desktop\AquaPure\book-service.html', encoding='utf-8').read()
idx2 = c2.find('Rated 4.9/5 by 48,000+ Verified Homeowners')
print(c2[idx2:idx2+3000])

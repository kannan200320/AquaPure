c = open(r'c:\Users\KANNAN\Desktop\AquaPure\amc-membership.html', encoding='utf-8').read()
idx = c.find('Col. R. K. Nambiar')
print("=== amc-membership.html Card 2 & 3 ===")
print(c[idx:idx+1500])

c2 = open(r'c:\Users\KANNAN\Desktop\AquaPure\book-service.html', encoding='utf-8').read()
idx2 = c2.find('Ananya Deshmukh')
print("\n=== book-service.html Card 2 & 3 ===")
print(c2[idx2:idx2+1500])

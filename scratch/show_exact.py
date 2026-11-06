c = open(r'c:\Users\KANNAN\Desktop\AquaPure\amc-membership.html', encoding='utf-8').read()
idx = c.find('Prestige Enclave RWA')
print("=== amc-membership.html card 2 & 3 ===")
print(c[idx-200:idx+800])

c2 = open(r'c:\Users\KANNAN\Desktop\AquaPure\book-service.html', encoding='utf-8').read()
idx2 = c2.find('Vikram K.')
print("\n=== book-service.html card 3 ===")
print(c2[idx2-200:idx2+400])

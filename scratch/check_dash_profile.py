c = open(r'c:\Users\KANNAN\Desktop\AquaPure\dashboard.html', encoding='utf-8').read()
idx = c.find('tab-profile')
while idx != -1:
    print(c[idx-50:idx+300])
    print('='*40)
    idx = c.find('tab-profile', idx + 100)

for fname in ['services.html', 'book-service.html', 'amc-membership.html', 'pricing.html']:
    c = open(rf'c:\Users\KANNAN\Desktop\AquaPure\{fname}', encoding='utf-8').read()
    print(f"\n==================== {fname} ====================")
    for term in ['Rajeev S.', 'Ananya M.', 'Col. Sharma', 'Ananya Deshmukh', 'Vikram Sharma', 'Prestige Palms', 'Gold AMC']:
        pos = c.find(term)
        if pos != -1:
            print(f"[{term}]:\n{c[max(0, pos-200):min(len(c), pos+200)]}\n" + "-"*30)

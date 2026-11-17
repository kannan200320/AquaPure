with open('blog.html', 'r', encoding='utf-8') as f:
    c = f.read()

s_idx = c.find('<!-- Desktop Navigation')
e_idx = c.find('</nav>', s_idx)
print(c[s_idx:e_idx+6])

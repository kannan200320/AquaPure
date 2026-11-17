with open('index.html', 'r', encoding='utf-8') as f:
    c_index = f.read()

with open('blog-details.html', 'r', encoding='utf-8') as f:
    c_blog_details = f.read()

# compare mobile menu in index vs blog-details
m_index = c_index[c_index.find('<div id="mobile-menu"'):c_index.find('</nav>', c_index.find('<div id="mobile-menu"'))+6]
m_bd = c_blog_details[c_blog_details.find('<div id="mobile-menu"'):c_blog_details.find('</nav>', c_blog_details.find('<div id="mobile-menu"'))+6]

print("Index mobile nav:")
print(m_index[:300])
print("Blog details mobile nav:")
print(m_bd[:300])

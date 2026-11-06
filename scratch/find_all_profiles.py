import glob
import re
import os

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))

print("=== SEARCHING FOR TESTIMONIALS / FEEDBACK / REVIEWS / TEAM ===")
keywords = ['Rajesh Khanna', 'Pooja Menon', 'Anil Sharma', 'Dr. Ritu Verma', 'Sneha Mukherjee', 'Vikram Kulkarni', 'Rajeev', 'Ananya', 'Sharma', 'testimonial', 'feedback', 'review', 'team', 'author', 'avatar', 'profile']

for f in html_files:
    fname = os.path.basename(f)
    content = open(f, encoding='utf-8').read()
    
    # Check for words like feedback, testimonial, author profile
    matches = []
    if 'Rajesh Khanna' in content: matches.append('Rajesh Khanna')
    if 'Dr. Ritu Verma' in content: matches.append('Dr. Ritu Verma')
    if 'Rajeev' in content: matches.append('Rajeev')
    if 'Dr. Elena Foster' in content: matches.append('Dr. Elena Foster')
    if 'Vikram' in content: matches.append('Vikram')
    if 'Pooja Menon' in content: matches.append('Pooja Menon')
    if 'Anil Sharma' in content: matches.append('Anil Sharma')
    if 'Sneha Mukherjee' in content: matches.append('Sneha Mukherjee')
    if 'Naveen Kumar' in content: matches.append('Naveen Kumar')
    if 'Varun Subramaniam' in content: matches.append('Varun Subramaniam')
    if 'Col. Sharma' in content: matches.append('Col. Sharma')
    
    # Also find any icon or placeholder used as avatar
    # e.g., fa-user, fa-user-circle, etc.
    user_icons = re.findall(r'<i[^>]*fa-user[^>]*>', content)
    
    if matches or user_icons:
        print(f"{fname}: names={matches}, user_icons_count={len(user_icons)}")

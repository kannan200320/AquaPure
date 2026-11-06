import glob, re, os

html_files = sorted(glob.glob(r'c:\Users\KANNAN\Desktop\AquaPure\*.html'))

for f in html_files:
    fname = os.path.basename(f)
    content = open(f, encoding='utf-8').read()
    
    # Let's find any rounded-full with initials or user icons
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if any(term in line.lower() for term in ['rounded-full', 'fa-user']) and any(x in line for x in ['[A-Z]{2}', 'text-xs', 'text-sm', 'text-white font-black', 'font-black']) and not any(skip in line for skip in ['rounded-full bg-cyan-100', 'px-3', 'px-4', 'w-2 h-2', 'w-12 h-12 rounded-2xl']):
            context = '\n'.join(lines[max(0, i-2):min(len(lines), i+8)])
            if any(k in context.lower() for k in ['dr.', 'owner', 'resident', 'member', 'subramaniam', 'khanna', 'menon', 'sharma', 'foster', 'author', 'vance', 'narayanan', 'ranganathan', 'avatar', 'profile', 'ext:']):
                print(f"=== {fname}:{i+1} ===")
                print(context)
                print('-'*40)

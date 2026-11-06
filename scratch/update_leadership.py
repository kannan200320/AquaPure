filepath = r"c:\Users\KANNAN\Desktop\AquaPure\about.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (
        '''            <div class="w-20 h-20 mx-auto rounded-2xl bg-cyan-600 text-white flex items-center justify-center text-2xl font-black shadow-md mb-4 shrink-0">
              SK
            </div>''',
        '''            <img src="assets/images/avatar-4.jpg" alt="Suresh Kumar, M.Tech" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-cyan-500/40">'''
    ),
    (
        '''            <div class="w-20 h-20 mx-auto rounded-2xl bg-teal-600 text-white flex items-center justify-center text-2xl font-black shadow-md mb-4 shrink-0">
              MN
            </div>''',
        '''            <img src="assets/images/avatar-3.jpg" alt="Dr. Meera Nambiar" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-teal-500/40">'''
    ),
    (
        '''            <div class="w-20 h-20 mx-auto rounded-2xl bg-sky-600 text-white flex items-center justify-center text-2xl font-black shadow-md mb-4 shrink-0">
              AR
            </div>''',
        '''            <img src="assets/images/avatar-2.jpg" alt="Arun Ranganathan" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-sky-500/40">'''
    ),
    (
        '''            <div class="w-20 h-20 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-black shadow-md mb-4 shrink-0">
              KV
            </div>''',
        '''            <img src="assets/images/avatar-5.jpg" alt="Kavita Venkatesh" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-blue-500/40">'''
    ),
]

for target, repl in replacements:
    # normalize newlines for matching
    assert target in content, f"Target not found: {target[:40]}"
    content = content.replace(target, repl, 1)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated about.html leadership avatars successfully!")

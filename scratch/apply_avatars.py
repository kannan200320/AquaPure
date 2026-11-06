import os
import re

base_dir = r"c:\Users\KANNAN\Desktop\AquaPure"

def update_file(filename, replacements):
    filepath = os.path.join(base_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    initial_content = content
    for target, replacement in replacements:
        if target not in content:
            print(f"FAILED target in {filename}:\n{target[:80]}...")
        else:
            content = content.replace(target, replacement, 1)
            print(f"Replaced in {filename}: {target[:50]}...")
            
    if content != initial_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"SUCCESS: Updated {filename}\n")
    else:
        print(f"NO CHANGES: {filename}\n")

# 1. index.html
update_file("index.html", [
    (
        '<div class="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-black text-sm shrink-0">RK</div>',
        '<img src="assets/images/avatar-1.jpg" alt="Rajesh Khanna" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">'
    ),
    (
        '<div class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-sm shrink-0">PM</div>',
        '<img src="assets/images/avatar-3.jpg" alt="Pooja Menon" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">'
    ),
    (
        '<div class="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-black text-sm shrink-0">AS</div>',
        '<img src="assets/images/avatar-2.jpg" alt="Anil Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">'
    )
])

# 2. home-family.html
update_file("home-family.html", [
    (
        '<div class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">DR</div>',
        '<img src="assets/images/avatar-5.jpg" alt="Dr. Ritu Verma, MD" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">'
    ),
    (
        '<div class="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">SM</div>',
        '<img src="assets/images/avatar-3.jpg" alt="Sneha Mukherjee" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">'
    ),
    (
        '<div class="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold shrink-0">VK</div>',
        '<img src="assets/images/avatar-4.jpg" alt="Vikram Kulkarni" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">'
    )
])

# 3. about.html
update_file("about.html", [
    (
        '<div class="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">NK</div>',
        '<img src="assets/images/avatar-1.jpg" alt="Naveen Kapoor" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">'
    ),
    (
        '<div class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">SD</div>',
        '<img src="assets/images/avatar-5.jpg" alt="Shalini Deshmukh" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">'
    ),
    (
        '<div class="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold shrink-0">MR</div>',
        '<img src="assets/images/avatar-2.jpg" alt="M. R. Bhatia" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">'
    )
])

# 4. services.html
update_file("services.html", [
    (
        '<div class="pt-4 border-t border-sky-200 dark:border-sky-800 font-bold text-xs text-black dark:text-white mt-4">Rajeev S. - Villa Owner</div>',
        '''<div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-1.jpg" alt="Rajeev S." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Rajeev S.</div>
              <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Villa Owner, Sunnyvale</div>
            </div>
          </div>'''
    ),
    (
        '<div class="pt-4 border-t border-sky-200 dark:border-sky-800 font-bold text-xs text-black dark:text-white mt-4">Ananya M. - Duplex Resident</div>',
        '''<div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-3.jpg" alt="Ananya M." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Ananya M.</div>
              <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Duplex Resident, Blossom Valley</div>
            </div>
          </div>'''
    ),
    (
        '<div class="pt-4 border-t border-sky-200 dark:border-sky-800 font-bold text-xs text-black dark:text-white mt-4">Col. Sharma - RWA Secretary</div>',
        '''<div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-4.jpg" alt="Col. Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Col. Sharma</div>
              <div class="text-[11px] font-semibold text-sky-600 dark:text-sky-400">RWA Secretary, Silver Oaks</div>
            </div>
          </div>'''
    )
])

# 5. amc-membership.html
update_file("amc-membership.html", [
    (
        '''          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white mt-4">
            <div>Vikram Sharma</div>
            <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Sunnyvale (3-Year Member)</div>
          </div>''',
        '''          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-1.jpg" alt="Vikram Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Vikram Sharma</div>
              <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Sunnyvale (3-Year Member)</div>
            </div>
          </div>'''
    ),
    (
        '''          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white mt-4">
            <div>Prestige Enclave RWA</div>
            <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">64-Unit Apartment Community</div>
          </div>''',
        '''          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-2.jpg" alt="Prestige Enclave RWA" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Prestige Enclave RWA</div>
              <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">64-Unit Apartment Community</div>
            </div>
          </div>'''
    ),
    (
        '''          <div class="pt-4 border-t border-sky-200 dark:border-sky-800 text-xs font-bold text-black dark:text-white mt-4">
            <div>Dr. Kavita Rao</div>
            <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Cupertino (Infant Safe Plan)</div>
          </div>''',
        '''          <div class="flex items-center gap-3 pt-4 border-t border-sky-200 dark:border-sky-800 mt-4">
            <img src="assets/images/avatar-5.jpg" alt="Dr. Kavita Rao" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="font-bold text-xs text-black dark:text-white">Dr. Kavita Rao</div>
              <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Cupertino (Infant Safe Plan)</div>
            </div>
          </div>'''
    )
])

# 6. book-service.html
update_file("book-service.html", [
    (
        '''          <div class="pt-2 border-t border-sky-100 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Siddharth Sen</div>
            <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Sunnyvale Villa Owner</div>
          </div>''',
        '''          <div class="flex items-center gap-3 pt-2 border-t border-sky-100 dark:border-sky-800">
            <img src="assets/images/avatar-4.jpg" alt="Siddharth Sen" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="text-xs font-bold text-black dark:text-white">Siddharth Sen</div>
              <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Sunnyvale Villa Owner</div>
            </div>
          </div>'''
    ),
    (
        '''          <div class="pt-2 border-t border-sky-100 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Ananya Deshmukh</div>
            <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">San Jose Resident</div>
          </div>''',
        '''          <div class="flex items-center gap-3 pt-2 border-t border-sky-100 dark:border-sky-800">
            <img src="assets/images/avatar-5.jpg" alt="Ananya Deshmukh" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-teal-500/50 shadow-sm">
            <div>
              <div class="text-xs font-bold text-black dark:text-white">Ananya Deshmukh</div>
              <div class="text-[11px] font-semibold text-teal-600 dark:text-teal-400">San Jose Resident</div>
            </div>
          </div>'''
    ),
    (
        '''          <div class="pt-2 border-t border-sky-100 dark:border-sky-800 text-xs font-bold text-black dark:text-white">
            <div>Vikram K.</div>
            <div class="text-[11px] font-semibold text-sky-600 dark:text-sky-400">Cupertino Townhouse Owner</div>
          </div>''',
        '''          <div class="flex items-center gap-3 pt-2 border-t border-sky-100 dark:border-sky-800">
            <img src="assets/images/avatar-2.jpg" alt="Vikram K." class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-sky-500/50 shadow-sm">
            <div>
              <div class="text-xs font-bold text-black dark:text-white">Vikram K.</div>
              <div class="text-[11px] font-semibold text-sky-600 dark:text-sky-400">Cupertino Townhouse Owner</div>
            </div>
          </div>'''
    )
])

# 7. dashboard.html
update_file("dashboard.html", [
    (
        '''            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-teal-600 text-white font-black text-xs flex items-center justify-center shadow-md">
              VS
            </div>''',
        '''            <img src="assets/images/avatar-1.jpg" alt="Vikram Sharma" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500 shadow-md">'''
    ),
    (
        '''<div class="w-8 h-8 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-xs">VS</div>''',
        '''<img src="assets/images/avatar-1.jpg" alt="Vikram Sharma" class="w-8 h-8 rounded-full object-cover shrink-0 border border-cyan-500 shadow-sm">'''
    ),
    (
        '''<div class="w-8 h-8 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs">NS</div>''',
        '''<img src="assets/images/avatar-5.jpg" alt="Neha Sharma" class="w-8 h-8 rounded-full object-cover shrink-0 border border-teal-500 shadow-sm">'''
    )
])

# 8. blog.html
update_file("blog.html", [
    (
        '''              <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white font-black text-lg">
                DR
              </div>''',
        '''              <img src="assets/images/avatar-3.jpg" alt="Dr. Radhika Sharma, Ph.D." class="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-cyan-500 shadow-md">'''
    ),
    (
        '''            <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              RS
            </div>''',
        '''            <img src="assets/images/avatar-3.jpg" alt="Dr. Radhika Sharma" class="w-20 h-20 mx-auto rounded-full object-cover border-4 border-cyan-500/40 shadow-lg">'''
    ),
    (
        '''            <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-teal-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              MV
            </div>''',
        '''            <img src="assets/images/avatar-1.jpg" alt="Marcus Vance" class="w-20 h-20 mx-auto rounded-full object-cover border-4 border-teal-500/40 shadow-lg">'''
    ),
    (
        '''            <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              EF
            </div>''',
        '''            <img src="assets/images/avatar-5.jpg" alt="Dr. Elena Foster" class="w-20 h-20 mx-auto rounded-full object-cover border-4 border-sky-500/40 shadow-lg">'''
    )
])

# 9. blog-details*.html
blog_details_map = {
    "blog-details-bleach.html": ("EF", "avatar-5.jpg", "Dr. Elena Foster, M.D."),
    "blog-details-eczema.html": ("EF", "avatar-5.jpg", "Dr. Elena Foster, M.D."),
    "blog-details-jetting.html": ("AM", "avatar-2.jpg", "Alex Mercer"),
    "blog-details-lab.html": ("AD", "avatar-4.jpg", "AquaPure Diagnostics Laboratory"),
    "blog-details-osha.html": ("AM", "avatar-2.jpg", "Alex Mercer"),
    "blog-details-pipeline.html": ("MV", "avatar-1.jpg", "Marcus Vance, M.Sc."),
    "blog-details-sintex.html": ("MV", "avatar-1.jpg", "Marcus Vance, M.Sc."),
    "blog-details-sump.html": ("TO", "avatar-4.jpg", "Technical Operations Directorate"),
    "blog-details-uv.html": ("RS", "avatar-3.jpg", "Dr. Radhika Sharma, Ph.D."),
    "blog-details.html": ("RS", "avatar-3.jpg", "Dr. Radhika Sharma, Ph.D."),
}

for b_file, (initial, img, author_name) in blog_details_map.items():
    update_file(b_file, [
        (
            f'''              <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white font-black text-lg shadow-md">
                {initial}
              </div>''',
            f'''              <img src="assets/images/{img}" alt="{author_name}" class="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-cyan-500 shadow-md">'''
        )
    ])

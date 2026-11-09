def update_about():
    with open('about.html', 'r', encoding='utf-8') as f:
        content = f.read()

    old_team = '''      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div>
            <img src="assets/images/avatar-4.jpg" alt="Suresh Kumar, M.Tech" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-cyan-500/40">
            <div class="min-h-[3.25rem] flex flex-col justify-center mb-3">
              <h3 class="text-lg font-bold text-black dark:text-white">Suresh Kumar, M.Tech</h3>
              <div class="text-xs font-bold text-cyan-600 dark:text-cyan-400">Founder & Chief Water Scientist</div>
            </div>
          </div>
          <p class="text-xs font-medium text-black dark:text-white leading-relaxed min-h-[4.5rem]">
            Former environmental consultant with 18 years experience in municipal water treatment and advanced filtration system designs.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div>
            <img src="assets/images/avatar-3.jpg" alt="Dr. Meera Nambiar" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-teal-500/40">
            <div class="min-h-[3.25rem] flex flex-col justify-center mb-3">
              <h3 class="text-lg font-bold text-black dark:text-white">Dr. Meera Nambiar</h3>
              <div class="text-xs font-bold text-teal-600 dark:text-teal-400">Head of Microbiology & Quality</div>
            </div>
          </div>
          <p class="text-xs font-medium text-black dark:text-white leading-relaxed min-h-[4.5rem]">
            Specialist in biofilm pathogens, coliform eradication, and rapid spectrophotometric water quality diagnostic testing.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div>
            <img src="assets/images/avatar-2.jpg" alt="Arun Ranganathan" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-sky-500/40">
            <div class="min-h-[3.25rem] flex flex-col justify-center mb-3">
              <h3 class="text-lg font-bold text-black dark:text-white">Arun Ranganathan</h3>
              <div class="text-xs font-bold text-sky-600 dark:text-sky-400">Operations & Fleet Director</div>
            </div>
          </div>
          <p class="text-xs font-medium text-black dark:text-white leading-relaxed min-h-[4.5rem]">
            OSHA certified confined-space safety engineer directing our 18 mobile fleet units and certified field technician safety protocols.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div>
            <img src="assets/images/avatar-5.jpg" alt="Kavita Venkatesh" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-blue-500/40">
            <div class="min-h-[3.25rem] flex flex-col justify-center mb-3">
              <h3 class="text-lg font-bold text-black dark:text-white">Kavita Venkatesh</h3>
              <div class="text-xs font-bold text-cyan-600 dark:text-cyan-400">Customer Success & AMC Head</div>
            </div>
          </div>
          <p class="text-xs font-medium text-black dark:text-white leading-relaxed min-h-[4.5rem]">
            Directing 12,000+ active homeowner AMC subscriptions and managing residential housing society service contracts.
          </p>
        </div>
      </div>'''

    new_team = '''      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col items-center">
            <img src="assets/images/avatar-4.jpg" alt="Suresh Kumar, M.Tech" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-cyan-500/40">
            <div class="min-h-[3.75rem] flex flex-col justify-center mb-3 text-center">
              <h3 class="text-lg font-bold text-black dark:text-white leading-snug">Suresh Kumar, M.Tech</h3>
              <div class="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">Founder &amp; Chief Water Scientist</div>
            </div>
            <p class="text-xs font-medium text-black dark:text-white leading-relaxed flex-1 flex items-start text-center">
              Former environmental consultant with 18 years experience in municipal water treatment and advanced filtration system designs.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col items-center">
            <img src="assets/images/avatar-3.jpg" alt="Dr. Meera Nambiar" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-teal-500/40">
            <div class="min-h-[3.75rem] flex flex-col justify-center mb-3 text-center">
              <h3 class="text-lg font-bold text-black dark:text-white leading-snug">Dr. Meera Nambiar</h3>
              <div class="text-xs font-bold text-teal-600 dark:text-teal-400 mt-0.5">Head of Microbiology &amp; Quality</div>
            </div>
            <p class="text-xs font-medium text-black dark:text-white leading-relaxed flex-1 flex items-start text-center">
              Specialist in biofilm pathogens, coliform eradication, and rapid spectrophotometric water quality diagnostic testing.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col items-center">
            <img src="assets/images/avatar-2.jpg" alt="Arun Ranganathan" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-sky-500/40">
            <div class="min-h-[3.75rem] flex flex-col justify-center mb-3 text-center">
              <h3 class="text-lg font-bold text-black dark:text-white leading-snug">Arun Ranganathan</h3>
              <div class="text-xs font-bold text-sky-600 dark:text-sky-400 mt-0.5">Operations &amp; Fleet Director</div>
            </div>
            <p class="text-xs font-medium text-black dark:text-white leading-relaxed flex-1 flex items-start text-center">
              OSHA certified confined-space safety engineer directing our 18 mobile fleet units and certified field technician safety protocols.
            </p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-center flex flex-col justify-between h-full shadow-sm">
          <div class="flex-1 flex flex-col items-center">
            <img src="assets/images/avatar-5.jpg" alt="Kavita Venkatesh" class="w-20 h-20 mx-auto rounded-2xl object-cover shadow-md mb-4 shrink-0 border-2 border-blue-500/40">
            <div class="min-h-[3.75rem] flex flex-col justify-center mb-3 text-center">
              <h3 class="text-lg font-bold text-black dark:text-white leading-snug">Kavita Venkatesh</h3>
              <div class="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">Customer Success &amp; AMC Head</div>
            </div>
            <p class="text-xs font-medium text-black dark:text-white leading-relaxed flex-1 flex items-start text-center">
              Directing 12,000+ active homeowner AMC subscriptions and managing residential housing society service contracts.
            </p>
          </div>
        </div>
      </div>'''

    if old_team in content:
        content = content.replace(old_team, new_team, 1)
        print("Updated about.html team (Image 5)")
    else:
        print("Could not find about.html team")

    with open('about.html', 'w', encoding='utf-8') as f:
        f.write(content)

update_about()

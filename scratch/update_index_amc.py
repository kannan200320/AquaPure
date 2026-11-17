with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read().replace('\r\n', '\n')

old_amc_card = """      <div class="relative rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-700 text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider text-cyan-100">
              <i class="fas fa-crown"></i> Annual Maintenance Contract
            </span>
            <h2 class="text-3xl sm:text-4xl font-black">Never Worry About Water Purity Again</h2>
            <p class="text-xs sm:text-sm font-semibold text-sky-100 max-w-2xl leading-relaxed">
              Enroll in AquaPure Care 365. Receive 3 scheduled mechanized deep cleans per year, quarterly digital lab reports, priority emergency dispatch, and a 20% discount on pipeline flushing.
            </p>
            <div class="pt-2">
              <a href="amc-membership.html" class="px-6 py-3 rounded-xl bg-white text-cyan-700 font-extrabold text-sm shadow-md hover:bg-sky-50 transition-all inline-block">
                Join AMC Plan From $89/yr
              </a>
            </div>
          </div>
          <div class="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-3">
            <h4 class="font-bold text-lg text-white">Membership Benefits:</h4>
            <ul class="space-y-2 text-xs font-semibold text-sky-100">
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-300"></i> Automated SMS & WhatsApp reminders</li>
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-300"></i> Free interim water TDS & bacterial test</li>
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-300"></i> VIP same-day service booking</li>
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-300"></i> 100% free re-clean warranty</li>
            </ul>
          </div>
        </div>
      </div>"""

new_amc_card = """      <div class="relative rounded-3xl bg-white dark:bg-[#0c1e33] border border-sky-200 dark:border-sky-800 text-black dark:text-white p-8 sm:p-12 overflow-hidden shadow-2xl transition-colors">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8 space-y-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-xs font-black uppercase tracking-wider">
              <i class="fas fa-crown"></i> Annual Maintenance Contract
            </span>
            <h2 class="text-3xl sm:text-4xl font-black text-black dark:text-white">Never Worry About Water Purity Again</h2>
            <p class="text-xs sm:text-sm font-semibold text-black dark:text-white max-w-2xl leading-relaxed">
              Enroll in AquaPure Care 365. Receive 3 scheduled mechanized deep cleans per year, quarterly digital lab reports, priority emergency dispatch, and a 20% discount on pipeline flushing.
            </p>
            <div class="pt-2">
              <a href="amc-membership.html" class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-sm shadow-xl shadow-cyan-600/25 transition-all">
                <i class="fas fa-award"></i>
                <span>Join AMC Plan From $89/yr</span>
              </a>
            </div>
          </div>
          <div class="lg:col-span-4 bg-sky-50 dark:bg-[#07131f] p-6 rounded-2xl border border-sky-200 dark:border-sky-800 space-y-3 shadow-sm">
            <h4 class="font-bold text-lg text-black dark:text-white">Membership Benefits:</h4>
            <ul class="space-y-2 text-xs font-semibold text-black dark:text-white">
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-600 dark:text-teal-400"></i> Automated SMS & WhatsApp reminders</li>
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-600 dark:text-teal-400"></i> Free interim water TDS & bacterial test</li>
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-600 dark:text-teal-400"></i> VIP same-day service booking</li>
              <li class="flex items-center gap-2"><i class="fas fa-check-circle text-teal-600 dark:text-teal-400"></i> 100% free re-clean warranty</li>
            </ul>
          </div>
        </div>
      </div>"""

assert old_amc_card in c, "old_amc_card not found in index.html"
c = c.replace(old_amc_card, new_amc_card)

with open('index.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(c)

print("Updated AMC card in index.html")

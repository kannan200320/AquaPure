with open(r'c:\Users\KANNAN\Desktop\AquaPure\pricing.html', 'r', encoding='utf-8') as f:
    c = f.read()

for line in c.splitlines():
    if 'Mehta, Sunnyvale' in line:
        target = line
        print(f"Found target: {repr(target)}")
        repl = '''          <div class="flex items-center gap-3 pt-3 border-t border-sky-100 dark:border-sky-800">
            <img src="assets/images/avatar-1.jpg" alt="Vikram &amp; Sneha Mehta" class="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-cyan-500/50 shadow-sm">
            <div>
              <div class="text-xs font-bold text-black dark:text-white">Vikram &amp; Sneha Mehta</div>
              <div class="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">Sunnyvale Villa Homeowners</div>
            </div>
          </div>'''
        c = c.replace(target, repl, 1)
        with open(r'c:\Users\KANNAN\Desktop\AquaPure\pricing.html', 'w', encoding='utf-8') as out:
            out.write(c)
        print("Updated pricing.html successfully!")
        break

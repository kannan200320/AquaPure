# 1. Update contact.html
with open('contact.html', 'r', encoding='utf-8') as f:
    contact_html = f.read()

old_input = '<input type="date" class="w-full p-3.5 rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#08182b] text-black dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">'
new_input = '<input type="date" id="contact-date" name="servicedate" class="w-full p-3.5 rounded-xl border border-sky-300 dark:border-sky-700 bg-white dark:bg-[#08182b] text-black dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500">'

if old_input in contact_html:
    contact_html = contact_html.replace(old_input, new_input, 1)
    with open('contact.html', 'w', encoding='utf-8') as f:
        f.write(contact_html)
    print("Updated contact.html with id='contact-date'")
else:
    print("Could not find date input in contact.html")

# 2. Update assets/css/style.css
with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

calendar_css = '''
/* ==========================================================================
   Date Input Calendar Picker Indicator - Crisp Pure White in Dark Mode
   ========================================================================== */
input[type="date"] {
  position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 0.2s, filter 0.2s;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

html.dark input[type="date"],
html.dark input[type="time"],
html.dark input[type="datetime-local"] {
  color-scheme: dark !important;
}

html.dark input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1) brightness(1.6) contrast(1.2) !important;
  opacity: 1 !important;
}
'''

if 'webkit-calendar-picker-indicator' not in css:
    css += calendar_css
    with open('assets/css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Appended dark mode calendar icon CSS to style.css")
else:
    print("Calendar CSS already present in style.css")

# 3. Update assets/js/main.js to enforce future dates only
with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

date_logic = '''  // ==========================================================================
  // Date Picker Future Dates Only (Disallow Past / Existing Dates)
  // ==========================================================================
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(dateInput => {
    dateInput.setAttribute('min', todayStr);

    dateInput.addEventListener('change', () => {
      if (dateInput.value && dateInput.value < todayStr) {
        showToast('Please select a valid upcoming date. Past dates are not accepted.', 'error');
        dateInput.value = '';
      }
    });
  });
'''

# Insert inside initForms()
if 'Date Picker Future Dates Only' not in js:
    target = 'function initForms() {\n'
    if target not in js:
        target = 'function initForms() {\r\n'
    
    if target in js:
        js = js.replace(target, target + date_logic + '\n', 1)
        with open('assets/js/main.js', 'w', encoding='utf-8') as f:
            f.write(js)
        print("Added date restriction logic to initForms() in assets/js/main.js")
    else:
        print("Could not find function initForms() in main.js")
else:
    print("Date logic already in main.js")

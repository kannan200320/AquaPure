# Update assets/css/style.css
with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_css = '''html.dark input[type="date"]::-webkit-calendar-picker-indicator,
html.dark input[type="time"]::-webkit-calendar-picker-indicator,
html.dark input[type="datetime-local"]::-webkit-calendar-picker-indicator,
html.dark input[type="month"]::-webkit-calendar-picker-indicator {
  filter: invert(1) brightness(1.2) !important;
  opacity: 1 !important;
  cursor: pointer !important;
}'''

new_css = '''html.dark input[type="date"]::-webkit-calendar-picker-indicator,
html.dark input[type="time"]::-webkit-calendar-picker-indicator,
html.dark input[type="datetime-local"]::-webkit-calendar-picker-indicator,
html.dark input[type="month"]::-webkit-calendar-picker-indicator,
html.dark #contact-date::-webkit-calendar-picker-indicator {
  filter: brightness(0) invert(1) !important;
  opacity: 1 !important;
  cursor: pointer !important;
}'''

css_norm = css.replace('\r\n', '\n')
old_css_norm = old_css.replace('\r\n', '\n')
new_css_norm = new_css.replace('\r\n', '\n')

if old_css_norm in css_norm:
    css_norm = css_norm.replace(old_css_norm, new_css_norm, 1)
    with open('assets/css/style.css', 'w', encoding='utf-8') as f:
        f.write(css_norm)
    print("Updated style.css with brightness(0) invert(1)")
else:
    print("Could not find old_css in style.css")

# Also add date submission check in main.js
with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

old_submit = '''      // Step 4: Validate Street / Property Address
      if (!validateAddressField(true)) {
        addressInput && addressInput.focus();
        return;
      }'''

new_submit = '''      // Step: Validate Date if present (Disallow Past / Existing Dates)
      const dateInp = form.querySelector('input[type="date"]');
      if (dateInp && dateInp.value) {
        const todayVal = new Date().toISOString().split('T')[0];
        if (dateInp.value < todayVal) {
          showToast('Please select a valid upcoming date. Past dates are not accepted.', 'error');
          dateInp.focus();
          return;
        }
      }

      // Step 4: Validate Street / Property Address
      if (!validateAddressField(true)) {
        addressInput && addressInput.focus();
        return;
      }'''

js_norm = js.replace('\r\n', '\n')
old_submit_norm = old_submit.replace('\r\n', '\n')
new_submit_norm = new_submit.replace('\r\n', '\n')

if old_submit_norm in js_norm:
    js_norm = js_norm.replace(old_submit_norm, new_submit_norm, 1)
    with open('assets/js/main.js', 'w', encoding='utf-8') as f:
        f.write(js_norm)
    print("Updated main.js with date validation on submit")
else:
    print("Could not find old_submit in main.js")

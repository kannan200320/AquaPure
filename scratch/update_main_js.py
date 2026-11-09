with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

target = '''    // Realtime number blocking on Name field
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        nameInput.value = nameInput.value.replace(/[^a-zA-Z\\s]/g, '');
      });
      nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim().length > 0) {
          validateNameField(true);
        }
      });
    }

    // Realtime letter blocking on Phone field
    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\\D/g, '').slice(0, 10);
      });
      phoneInput.addEventListener('blur', () => {
        if (phoneInput.value.trim().length > 0) {
          validatePhoneField(true);
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim().length > 0) {
          validateEmailField(true);
        }
      });
    }

    if (addressInput) {
      addressInput.addEventListener('blur', () => {
        if (addressInput.value.trim().length > 0) {
          validateAddressField(true);
        }
      });
    }'''

replacement = '''    // Realtime number blocking on Name field
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        nameInput.value = nameInput.value.replace(/[^a-zA-Z\\s]/g, '');
      });
      nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim().length > 0) {
          const isValid = validateNameField(true);
          if (isValid && phoneInput && !phoneInput.value.trim()) {
            phoneInput.focus();
          }
        }
      });
      nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (validateNameField(true) && phoneInput) {
            phoneInput.focus();
          }
        }
      });
    }

    // Realtime letter blocking on Phone field
    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\\D/g, '').slice(0, 10);
      });
      phoneInput.addEventListener('blur', () => {
        if (phoneInput.value.trim().length > 0) {
          const isValid = validatePhoneField(true);
          if (isValid && emailInput && !emailInput.value.trim()) {
            emailInput.focus();
          }
        }
      });
      phoneInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (validatePhoneField(true) && emailInput) {
            emailInput.focus();
          }
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        if (emailInput.value.trim().length > 0) {
          const isValid = validateEmailField(true);
          if (isValid && addressInput && !addressInput.value.trim()) {
            addressInput.focus();
          }
        }
      });
      emailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (validateEmailField(true) && addressInput) {
            addressInput.focus();
          }
        }
      });
    }

    if (addressInput) {
      addressInput.addEventListener('blur', () => {
        if (addressInput.value.trim().length > 0) {
          validateAddressField(true);
        }
      });
    }'''

js_norm = js.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in js_norm:
    js_norm = js_norm.replace(target_norm, replacement_norm, 1)
    with open('assets/js/main.js', 'w', encoding='utf-8') as f:
        f.write(js_norm)
    print("Updated assets/js/main.js successfully")
else:
    print("Target not found in main.js")

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

target = '''/* Mobile Menu Drawer Styling & Transitions (Right-Side Drawer, Full Height, Zero Gap Below) */
#mobile-menu {
  position: fixed !important;
  top: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  left: auto !important;
  height: 100vh !important;
  height: 100dvh !important;
  min-height: 100vh !important;
  min-height: 100dvh !important;
  max-height: 100vh !important;
  width: 290px !important;
  max-width: 85vw !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  z-index: 100 !important;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease !important;
  box-shadow: -10px 0 30px -5px rgba(0, 0, 0, 0.3) !important;
}'''

replacement = '''/* Mobile Menu Drawer Styling & Transitions (Right-Side Drawer, Full Height, Zero Gap Below) */
#mobile-menu {
  position: fixed !important;
  top: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  left: auto !important;
  height: 100vh !important;
  height: 100dvh !important;
  min-height: 100vh !important;
  min-height: 100dvh !important;
  max-height: 100vh !important;
  max-height: 100dvh !important;
  width: 290px !important;
  max-width: 85vw !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  overflow: hidden !important;
  z-index: 100 !important;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease !important;
  box-shadow: -10px 0 30px -5px rgba(0, 0, 0, 0.3) !important;
}

#mobile-menu nav {
  flex: 1 1 0% !important;
  min-height: 0 !important;
  overflow-y: auto !important;
  -webkit-overflow-scrolling: touch;
}

#mobile-menu > div:last-child {
  flex-shrink: 0 !important;
  margin-top: auto !important;
}'''

if target in css:
    css = css.replace(target, replacement, 1)
    with open('assets/css/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Updated assets/css/style.css successfully")
else:
    # Try normalized newlines
    css_norm = css.replace('\r\n', '\n')
    target_norm = target.replace('\r\n', '\n')
    replacement_norm = replacement.replace('\r\n', '\n')
    if target_norm in css_norm:
        css_norm = css_norm.replace(target_norm, replacement_norm, 1)
        with open('assets/css/style.css', 'w', encoding='utf-8') as f:
            f.write(css_norm)
        print("Updated assets/css/style.css with normalized newlines")
    else:
        print("Target not found in assets/css/style.css")

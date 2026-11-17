with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update html:not(.dark) text rule
target_light_rule = """html:not(.dark) p,
html:not(.dark) span:not(.badge-colored):not(.text-cyan-600):not(.text-teal-600):not(.text-sky-600),
html:not(.dark) label,
html:not(.dark) li,
html:not(.dark) dt,
html:not(.dark) dd,
html:not(.dark) h1,
html:not(.dark) h2,
html:not(.dark) h3,
html:not(.dark) h4,
html:not(.dark) h5,
html:not(.dark) h6 {
  color: #000000;
}"""

replacement_light_rule = """html:not(.dark) p:not(.text-white):not([class*="text-white"]):not(.article-image-caption-container *):not(.image-overlay-text *),
html:not(.dark) span:not(.badge-colored):not(.text-cyan-600):not(.text-teal-600):not(.text-sky-600):not(.text-white):not([class*="text-white"]):not(.article-image-caption-container *):not(.image-overlay-text *),
html:not(.dark) label,
html:not(.dark) li:not(.text-white):not([class*="text-white"]),
html:not(.dark) dt,
html:not(.dark) dd,
html:not(.dark) h1:not(.text-white):not([class*="text-white"]),
html:not(.dark) h2:not(.text-white):not([class*="text-white"]),
html:not(.dark) h3:not(.text-white):not([class*="text-white"]),
html:not(.dark) h4:not(.text-white):not([class*="text-white"]),
html:not(.dark) h5:not(.text-white):not([class*="text-white"]),
html:not(.dark) h6:not(.text-white):not([class*="text-white"]) {
  color: #000000;
}"""

c_norm = content.replace('\r\n', '\n')
t_norm = target_light_rule.replace('\r\n', '\n')
r_norm = replacement_light_rule.replace('\r\n', '\n')

assert t_norm in c_norm, "Target light rule not found in style.css"
c_norm = c_norm.replace(t_norm, r_norm)

# Add article image overlay rule
overlay_css = """
/* ==========================================================================
   ARTICLE IMAGE OVERLAYS & CAPTIONS
   Must ALWAYS be pure white (#ffffff) with high contrast in BOTH Light and Dark mode
   ========================================================================== */
.article-image-caption-container,
.article-image-caption-container *,
.article-image-caption-container p,
.article-image-caption-container span,
.article-image-caption-container i,
.image-overlay-text,
.image-overlay-text * {
  color: #ffffff !important;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.7) !important;
}

html:not(.dark) .article-image-caption-container p,
html:not(.dark) .article-image-caption-container span,
html:not(.dark) .article-image-caption-container i,
html.dark .article-image-caption-container p,
html.dark .article-image-caption-container span,
html.dark .article-image-caption-container i {
  color: #ffffff !important;
}
"""

if '.article-image-caption-container' not in c_norm:
    # insert before Critical Rule
    insert_marker = "/* Critical Rule: Buttons or links with white"
    assert insert_marker in c_norm, "Insert marker not found in style.css"
    c_norm = c_norm.replace(insert_marker, overlay_css + "\n" + insert_marker)

with open('assets/css/style.css', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(c_norm)

print("Updated style.css successfully!")

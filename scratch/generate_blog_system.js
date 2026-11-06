const fs = require('fs');

console.log('=== EXECUTING BLOG SYSTEM GENERATION ===');

// ============================================================================
// 1. UPDATE index.html: Overhead Tank Cleaning card image (Request 1)
// ============================================================================
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace the image inside the Overhead Tank Cleaning card
const oldOverheadCardImg = /<img src="assets\/images\/overhead-tank-cleaning\.jpg" alt="Overhead Water Tank Cleaning"/;
if (oldOverheadCardImg.test(indexHtml)) {
  indexHtml = indexHtml.replace(
    oldOverheadCardImg,
    '<img src="assets/images/overhead-tank-cleaning-card.png" alt="Overhead Water Tank Cleaning"'
  );
  console.log('PASS: Updated Overhead Tank Cleaning card image in index.html to overhead-tank-cleaning-card.png');
  fs.writeFileSync('index.html', indexHtml, 'utf8');
} else {
  console.log('NOTE: oldOverheadCardImg not found or already updated in index.html');
}


// ============================================================================
// 2. UPDATE blog.html: Remove Case Studies & Practical Solutions (Request 2)
// AND update article links to point to specific blog detail pages
// ============================================================================
let blogHtml = fs.readFileSync('blog.html', 'utf8');

// Find and remove Section 12 (Case Studies)
const caseStudiesRegex = /<!-- ==========================================================================\s*SECTION 12: PRIMARY ARTICLES GRID \(PART 4 - PLUMBING & SOCIETY CASE STUDIES\)[\s\S]*?<\/section>/;

if (caseStudiesRegex.test(blogHtml)) {
  blogHtml = blogHtml.replace(caseStudiesRegex, '<!-- Section 12 Case Studies removed as requested -->');
  console.log('PASS: Removed Case Studies & Practical Solutions section from blog.html');
} else {
  console.log('NOTE: caseStudiesRegex did not match in blog.html, attempting line-based search');
  const lines = blogHtml.split('\n');
  const startIdx = lines.findIndex(l => l.includes('Case Studies & Practical Solutions'));
  if (startIdx !== -1) {
    // find section start
    let secStart = -1;
    for (let i = startIdx; i >= 0; i--) {
      if (lines[i].includes('<section')) { secStart = i; break; }
    }
    let secEnd = -1;
    for (let i = startIdx; i < lines.length; i++) {
      if (lines[i].includes('</section>')) { secEnd = i; break; }
    }
    if (secStart !== -1 && secEnd !== -1) {
      lines.splice(secStart, secEnd - secStart + 1, '<!-- Section 12 Case Studies removed as requested -->');
      blogHtml = lines.join('\n');
      console.log('PASS: Removed Case Studies using line splice');
    }
  }
}

// Update specific article links in blog.html so each links to its dedicated page
const linkReplacements = [
  { match: 'href="blog-details.html">Why Rooftop Black Sintex Tanks Turn into High-Heat Microbial Incubators', target: 'href="blog-details-sintex.html">Why Rooftop Black Sintex Tanks Turn into High-Heat Microbial Incubators' },
  { match: 'href="blog-details.html">Infant Eczema and Bath Water: The Dangerous Link to Heavy Tank Silt', target: 'href="blog-details-eczema.html">Infant Eczema and Bath Water: The Dangerous Link to Heavy Tank Silt' },
  { match: 'href="blog-details.html">Manual Broom Cleaning vs. 200-Bar High Pressure Sludge Jetting', target: 'href="blog-details-jetting.html">Manual Broom Cleaning vs. 200-Bar High Pressure Sludge Jetting' },
  { match: 'href="blog-details.html">How Gated Communities Manage 100,000L Underground Sumps Without Water Cuts', target: 'href="blog-details-sump.html">How Gated Communities Manage 100,000L Underground Sumps Without Water Cuts' },
  { match: 'href="blog-details.html">The Physics of 254nm Submersible UV Germicidal Disinfection', target: 'href="blog-details-uv.html">The Physics of 254nm Submersible UV Germicidal Disinfection' },
  { match: 'href="blog-details.html">Why Tank Cleaning Is Incomplete Without Food-Grade Pipeline De-scaling', target: 'href="blog-details-pipeline.html">Why Tank Cleaning Is Incomplete Without Food-Grade Pipeline De-scaling' },
  { match: 'href="blog-details.html">Understanding TDS, pH, and Turbidity: The Homeowner\'s Guide to Water Lab Reports', target: 'href="blog-details-lab.html">Understanding TDS, pH, and Turbidity: The Homeowner\'s Guide to Water Lab Reports' },
  { match: 'href="blog-details.html">Why Pouring Bleach or Phenyl into Your Tank Is Illegal and Dangerously Toxic', target: 'href="blog-details-bleach.html">Why Pouring Bleach or Phenyl into Your Tank Is Illegal and Dangerously Toxic' },
  { match: 'href="blog-details.html">OSHA Confined Space Protocols: Why Our Crew Uses 24V Air Blowers & Gas Monitors', target: 'href="blog-details-osha.html">OSHA Confined Space Protocols: Why Our Crew Uses 24V Air Blowers & Gas Monitors' }
];

linkReplacements.forEach(({ match, target }) => {
  if (blogHtml.includes(match)) {
    blogHtml = blogHtml.replace(match, target);
  }
});

// Also replace the "Read Article ->" link that immediately follows each article
const cardArticles = [
  { titleFragment: 'High-Heat Microbial Incubators', link: 'blog-details-sintex.html' },
  { titleFragment: 'Infant Eczema and Bath Water', link: 'blog-details-eczema.html' },
  { titleFragment: 'Manual Broom Cleaning vs. 200-Bar', link: 'blog-details-jetting.html' },
  { titleFragment: 'Gated Communities Manage 100,000L', link: 'blog-details-sump.html' },
  { titleFragment: 'Physics of 254nm Submersible', link: 'blog-details-uv.html' },
  { titleFragment: 'Food-Grade Pipeline De-scaling', link: 'blog-details-pipeline.html' },
  { titleFragment: 'Understanding TDS, pH, and Turbidity', link: 'blog-details-lab.html' },
  { titleFragment: 'Pouring Bleach or Phenyl', link: 'blog-details-bleach.html' },
  { titleFragment: 'OSHA Confined Space Protocols', link: 'blog-details-osha.html' }
];

cardArticles.forEach(({ titleFragment, link }) => {
  const idx = blogHtml.indexOf(titleFragment);
  if (idx !== -1) {
    const after = blogHtml.substring(idx, idx + 600);
    const readArtIdx = after.indexOf('href="blog-details.html" class="text-xs font-black text-cyan-600');
    if (readArtIdx !== -1) {
      const fullTarget = idx + readArtIdx;
      blogHtml = blogHtml.substring(0, fullTarget) + `href="${link}" class="text-xs font-black text-cyan-600` + blogHtml.substring(fullTarget + 'href="blog-details.html" class="text-xs font-black text-cyan-600'.length);
      console.log(`PASS: Linked Read Article button to ${link}`);
    }
  }
});

fs.writeFileSync('blog.html', blogHtml, 'utf8');
console.log('PASS: Saved updated blog.html');

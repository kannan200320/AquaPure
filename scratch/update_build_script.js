const fs = require('fs');
let code = fs.readFileSync('scratch/build_all_blog_details.js', 'utf8');

// Update Sintex
code = code.replace(
  /slug:\s*'blog-details-sintex\.html'[\s\S]*?image:\s*'[^']+'/,
  (match) => match.replace(/image:\s*'[^']+'/, "image: 'assets/images/blog-sintex-tanks.png'")
);
code = code.replace(
  /slug:\s*'blog-details-sintex\.html'[\s\S]*?imageAlt:\s*'[^']+'/,
  (match) => match.replace(/imageAlt:\s*'[^']+'/, "imageAlt: 'Four rooftop black Sintex polyethylene water storage tanks under direct sunlight certified to IS 12701'")
);
code = code.replace(
  /slug:\s*'blog-details-sintex\.html'[\s\S]*?caption:\s*'[^']+'/,
  (match) => match.replace(/caption:\s*'[^']+'/, "caption: 'Four certified black Sintex polyethylene water tanks installed on a residential terrace, exposed to intense ambient ultraviolet and solar radiation that accelerates water temperature.'")
);

// Update Eczema
code = code.replace(
  /slug:\s*'blog-details-eczema\.html'[\s\S]*?image:\s*'[^']+'/,
  (match) => match.replace(/image:\s*'[^']+'/, "image: 'assets/images/blog-infant-eczema.png'")
);
code = code.replace(
  /slug:\s*'blog-details-eczema\.html'[\s\S]*?imageAlt:\s*'[^']+'/,
  (match) => match.replace(/imageAlt:\s*'[^']+'/, "imageAlt: 'Mother giving safe bath to infant in baby tub with digital water thermometer'")
);
code = code.replace(
  /slug:\s*'blog-details-eczema\.html'[\s\S]*?caption:\s*'[^']+'/,
  (match) => match.replace(/caption:\s*'[^']+'/, "caption: 'Clinical observation shows clean, purified bath water protects delicate infant epidermal barriers from sediment-induced dermatitis, cradle cap, and eczema flare-ups.'")
);

// Update Sump
code = code.replace(
  /slug:\s*'blog-details-sump\.html'[\s\S]*?image:\s*'[^']+'/,
  (match) => match.replace(/image:\s*'[^']+'/, "image: 'assets/images/blog-gated-sump.jpg'")
);
code = code.replace(
  /slug:\s*'blog-details-sump\.html'[\s\S]*?imageAlt:\s*'[^']+'/,
  (match) => match.replace(/imageAlt:\s*'[^']+'/, "imageAlt: 'AquaPure certified engineering crew conducting underground sump inspection at Palm Haven Estate gated community'")
);
code = code.replace(
  /slug:\s*'blog-details-sump\.html'[\s\S]*?caption:\s*'[^']+'/,
  (match) => match.replace(/caption:\s*'[^']+'/, "caption: 'AquaPure specialized field crew performing multi-parameter water analysis, safety checks, and mechanized sludge evacuation at a large gated community underground sump.'")
);

// Update Pipeline
code = code.replace(
  /slug:\s*'blog-details-pipeline\.html'[\s\S]*?image:\s*'[^']+'/,
  (match) => match.replace(/image:\s*'[^']+'/, "image: 'assets/images/blog-pipeline-descaling.png'")
);
code = code.replace(
  /slug:\s*'blog-details-pipeline\.html'[\s\S]*?imageAlt:\s*'[^']+'/,
  (match) => match.replace(/imageAlt:\s*'[^']+'/, "imageAlt: 'Certified technician with wrench inspecting and de-scaling domestic undersink plumbing pipelines'")
);
code = code.replace(
  /slug:\s*'blog-details-pipeline\.html'[\s\S]*?caption:\s*'[^']+'/,
  (match) => match.replace(/caption:\s*'[^']+'/, "caption: 'AquaPure certified plumbing technician de-scaling domestic kitchen undersink supply lines to eliminate heavy calcification, rust, and interior bacterial biofilm.'")
);

// Update Lab
code = code.replace(
  /slug:\s*'blog-details-lab\.html'[\s\S]*?image:\s*'[^']+'/,
  (match) => match.replace(/image:\s*'[^']+'/, "image: 'assets/images/blog-water-lab.png'")
);
code = code.replace(
  /slug:\s*'blog-details-lab\.html'[\s\S]*?imageAlt:\s*'[^']+'/,
  (match) => match.replace(/imageAlt:\s*'[^']+'/, "imageAlt: 'AquaPure laboratory water testing station with digital TDS meter, pH meter, turbidity photometer, and sample beakers'")
);
code = code.replace(
  /slug:\s*'blog-details-lab\.html'[\s\S]*?caption:\s*'[^']+'/,
  (match) => match.replace(/caption:\s*'[^']+'/, "caption: 'AquaPure NABL-calibrated diagnostic testing station analyzing tap water, filtered water, and bottled water for TDS (23 ppm), pH (7.02), and turbidity (0.42 NTU).'")
);

fs.writeFileSync('scratch/build_all_blog_details.js', code, 'utf8');
console.log('Successfully updated scratch/build_all_blog_details.js');

const fs = require('fs');

let content = fs.readFileSync('blog.html', 'utf8');

const articleImages = [
  {
    titleSnippet: 'Why Rooftop Black Sintex Tanks Turn into High-Heat Microbial Incubators',
    img: 'assets/images/overhead-tank-cleaning.jpg',
    alt: 'Rooftop Black Sintex Tank Cleaning'
  },
  {
    titleSnippet: 'Infant Eczema and Bath Water: The Dangerous Link to Heavy Tank Silt',
    img: 'assets/images/infant-eczema-rashes.jpg',
    alt: 'Infant Eczema Bath Water Connection'
  },
  {
    titleSnippet: 'Manual Broom Cleaning vs. 200-Bar High Pressure Sludge Jetting',
    img: 'assets/images/150-bar-rotary-jet.png',
    alt: 'High Pressure Tank Sludge Jetting'
  },
  {
    titleSnippet: 'How Gated Communities Manage 100,000L Underground Sumps Without Water Cuts',
    img: 'assets/images/underground-sump-cleaning.jpg',
    alt: 'Community Underground Sump Management'
  },
  {
    titleSnippet: 'The Physics of 254nm Submersible UV Germicidal Disinfection',
    img: 'assets/images/uv-c-radiator-sterilization.jpg',
    alt: 'Submersible UV Germicidal Sterilization'
  },
  {
    titleSnippet: 'Why Tank Cleaning Is Incomplete Without Food-Grade Pipeline De-scaling',
    img: 'assets/images/pipeline-descaling.jpg',
    alt: 'Domestic Pipeline De-scaling'
  },
  {
    titleSnippet: 'Understanding TDS, pH, and Turbidity',
    img: 'assets/images/digital-photometer-tds.png',
    alt: 'Water Quality Testing TDS and Photometer'
  },
  {
    titleSnippet: 'Why Pouring Bleach or Phenyl into Your Tank Is Illegal',
    img: 'assets/images/bio-organic-fogging.jpg',
    alt: 'Safe Bio-Organic Disinfection vs Toxic Bleach'
  },
  {
    titleSnippet: 'OSHA Confined Space Protocols',
    img: 'assets/images/sludge-vacuum-extractor.png',
    alt: 'Confined Space Water Tank Safety Equipment'
  },
  {
    titleSnippet: 'Case Study: Eliminating 1400 PPM TDS Silt',
    img: 'assets/images/submersible-dewatering-pump.jpg',
    alt: 'High-Rise Complex Dewatering and Desilting'
  },
  {
    titleSnippet: 'Excessive Hair Fall and Tank Water Hardness',
    img: 'assets/images/aerosol-shower-inhalation.png',
    alt: 'Shower Water Hardness and Hair Fall Prevention'
  },
  {
    titleSnippet: 'The 5-Point Flashlight Inspection',
    img: 'assets/images/clear-rooftop-path.png',
    alt: 'Rooftop Water Tank Inspection'
  }
];

content = content.replace(/<article\b[^>]*>([\s\S]*?)<\/article>/gi, (match) => {
  // If already has an img, return as is
  if (match.includes('<img')) {
    return match;
  }

  // Find matching image config
  let matchedConfig = null;
  for (const cfg of articleImages) {
    if (match.includes(cfg.titleSnippet)) {
      matchedConfig = cfg;
      break;
    }
  }

  if (!matchedConfig) {
    console.log('No config match for article snippet:', match.slice(0, 100));
    return match;
  }

  // Extract category badge text
  const catMatch = match.match(/<span class="px-3 py-1 rounded-full[^"]*">([\s\S]*?)<\/span>/);
  const catText = catMatch ? catMatch[1].trim() : 'Water Health';

  // Extract read time
  const timeMatch = match.match(/<span class="text-black dark:text-white">(\d+\s*min\s*read)<\/span>/);
  const readTime = timeMatch ? timeMatch[1].trim() : '5 min read';

  // Extract opening article tag
  const openTagMatch = match.match(/<article\b[^>]*>/i);
  let openTag = openTagMatch ? openTagMatch[0] : '<article>';
  openTag = openTag.replace('p-6', '').replace('bg-[#f0f9ff]/70', 'bg-white');
  if (!openTag.includes('overflow-hidden')) {
    openTag = openTag.replace('class="', 'class="overflow-hidden group ');
  }

  // Extract the rest of the content (title, excerpt, footer)
  let inner = match.replace(/<article\b[^>]*>/i, '').replace(/<\/article>$/i, '');
  // Remove the old top badges div
  inner = inner.replace(/<div class="flex items-center justify-between text-xs font-bold">[\s\S]*?<\/div>/, '');

  const newArticle = `${openTag}
          <div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="${matchedConfig.img}" alt="${matchedConfig.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-sm text-cyan-700 dark:text-cyan-300 text-xs font-bold shadow-md">
              ${catText}
            </div>
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold">
              ${readTime}
            </div>
          </div>
          <div class="p-6 flex flex-col justify-between flex-1 space-y-4">
            ${inner.trim()}
          </div>
        </article>`;

  console.log('Successfully updated article:', matchedConfig.titleSnippet);
  return newArticle;
});

fs.writeFileSync('blog.html', content, 'utf8');
console.log('Done updating blog.html!');

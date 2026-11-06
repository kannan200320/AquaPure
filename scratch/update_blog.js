const fs = require('fs');

let content = fs.readFileSync('blog.html', 'utf8');

// 1. Remove Section 11 (Whitepaper download callout)
const whitepaperRegex = /<!--\s*===+\s*SECTION 11: SCIENTIFIC WHITEPAPER DOWNLOAD CALLOUT[\s\S]*?<\/section>/;
if (whitepaperRegex.test(content)) {
  content = content.replace(whitepaperRegex, '');
  console.log('Successfully removed Whitepaper section!');
} else {
  console.log('Whitepaper section regex failed, checking alternate pattern...');
  const altRegex = /<section[^>]*>[\s\S]*?Download the 2026 Residential Tank Purity[\s\S]*?<\/section>/;
  if (altRegex.test(content)) {
    content = content.replace(altRegex, '');
    console.log('Successfully removed Whitepaper section with alternate pattern!');
  }
}

// 2. Images map for the 12 articles
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
    titleSnippet: 'Understanding TDS, pH, and Turbidity: The Homeowner\'s Guide to Water Lab Reports',
    img: 'assets/images/digital-photometer-tds.png',
    alt: 'Water Quality Testing TDS and Photometer'
  },
  {
    titleSnippet: 'Why Pouring Bleach or Phenyl into Your Tank Is Illegal and Dangerously Toxic',
    img: 'assets/images/bio-organic-fogging.jpg',
    alt: 'Safe Bio-Organic Disinfection vs Toxic Bleach'
  },
  {
    titleSnippet: 'OSHA Confined Space Protocols: Why Our Crew Uses 24V Air Blowers & Gas Monitors',
    img: 'assets/images/sludge-vacuum-extractor.png',
    alt: 'Confined Space Water Tank Safety Equipment'
  },
  {
    titleSnippet: 'Case Study: Eliminating 1400 PPM TDS Silt in a 240-Apartment High-Rise Complex',
    img: 'assets/images/submersible-dewatering-pump.jpg',
    alt: 'High-Rise Complex Dewatering and Desilting'
  },
  {
    titleSnippet: 'Excessive Hair Fall and Tank Water Hardness: What Dermatologists Recommend',
    img: 'assets/images/aerosol-shower-inhalation.png',
    alt: 'Shower Water Hardness and Hair Fall Prevention'
  },
  {
    titleSnippet: 'The 5-Point Flashlight Inspection: How to Check Your Rooftop Tank Safely',
    img: 'assets/images/clear-rooftop-path.png',
    alt: 'Rooftop Water Tank Inspection'
  }
];

// Replace each article card
articleImages.forEach((item, idx) => {
  // Find article containing titleSnippet
  const articleRegex = new RegExp('(<article[^>]*class="[^"]*")[^>]*>([\\s\\S]*?' + item.titleSnippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s\\S]*?<\\/article>)', 'i');
  const match = content.match(articleRegex);
  if (match) {
    let art = match[0];
    // Check if image already added
    if (!art.includes('<img')) {
      // Modify article classes for overflow-hidden group
      art = art.replace(/class="([^"]*)"/, (m, cls) => {
        let newCls = cls.replace('p-6', '').replace('bg-[#f0f9ff]/70', 'bg-white');
        if (!newCls.includes('overflow-hidden')) newCls += ' overflow-hidden group';
        return `class="${newCls.trim()}"`;
      });

      // Extract category badge and read time
      const catMatch = art.match(/<span class="px-3 py-1 rounded-full[^"]*">([\s\S]*?)<\/span>/);
      const catText = catMatch ? catMatch[1].trim() : 'Water Health';
      const timeMatch = art.match(/<span class="text-black dark:text-white">(\d+\s*min\s*read)<\/span>/);
      const readTime = timeMatch ? timeMatch[1].trim() : '5 min read';

      // Remove the old top badges div
      art = art.replace(/<div class="flex items-center justify-between text-xs font-bold">[\s\S]*?<\/div>/, '');

      // Create image banner
      const imgBanner = `\n          <div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="${item.img}" alt="${item.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#0c1e33]/95 backdrop-blur-sm text-cyan-700 dark:text-cyan-300 text-xs font-bold shadow-md">
              ${catText}
            </div>
            <div class="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold">
              ${readTime}
            </div>
          </div>\n          <div class="p-6 flex flex-col justify-between flex-1 space-y-4">`;

      // Wrap inner content in p-6 container
      // Replace opening of first inner div with imgBanner
      art = art.replace(/(<article[^>]*>)\s*<div class="space-y-3">/, `$1${imgBanner}\n            <div class="space-y-3">`);
      
      // Close the p-6 container before </article>
      art = art.replace(/<\/article>$/, '          </div>\n        </article>');

      content = content.replace(match[0], art);
      console.log(`Updated article ${idx + 1}: ${item.titleSnippet.slice(0, 30)}...`);
    }
  } else {
    console.log(`Could not find article ${idx + 1}: ${item.titleSnippet}`);
  }
});

fs.writeFileSync('blog.html', content, 'utf8');
console.log('blog.html processing completed.');

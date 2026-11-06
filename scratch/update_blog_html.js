const fs = require('fs');
let blog = fs.readFileSync('blog.html', 'utf8');

// 1. Sintex Tank
const sintexBefore = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/overhead-tank-cleaning.jpg" alt="Rooftop Black Sintex Tank Cleaning" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;
const sintexAfter = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/blog-sintex-tanks.png" alt="Four Rooftop Black Sintex Polyethylene Tanks Under Direct Sunlight" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;

// 2. Infant Eczema
const eczemaBefore = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/infant-eczema-rashes.jpg" alt="Infant Eczema Bath Water Connection" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;
const eczemaAfter = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/blog-infant-eczema.png" alt="Mother Bathing Infant in Tub with Safe Clean Water" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;

// 3. Gated Community Sump
const sumpBefore = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/underground-sump-cleaning.jpg" alt="Community Underground Sump Management" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;
const sumpAfter = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/blog-gated-sump.jpg" alt="Engineering Crew Inspecting Gated Community Underground Sump" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;

// 4. Pipeline De-scaling
const pipelineBefore = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/pipeline-descaling.jpg" alt="Domestic Pipeline De-scaling" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;
const pipelineAfter = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/blog-pipeline-descaling.png" alt="Certified Plumbing Technician De-scaling Domestic Supply Pipelines" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;

// 5. Water Lab Reports
const labBefore = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/digital-photometer-tds.png" alt="Water Quality Testing TDS and Photometer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;
const labAfter = `<div class="relative h-48 overflow-hidden bg-sky-100 dark:bg-sky-950">
            <img src="assets/images/blog-water-lab.png" alt="Laboratory Bench Water Quality Testing Station TDS pH Turbidity" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">`;

console.log('Sintex match:', blog.includes(sintexBefore));
console.log('Eczema match:', blog.includes(eczemaBefore));
console.log('Sump match:', blog.includes(sumpBefore));
console.log('Pipeline match:', blog.includes(pipelineBefore));
console.log('Lab match:', blog.includes(labBefore));

if (blog.includes(sintexBefore)) blog = blog.replace(sintexBefore, sintexAfter);
if (blog.includes(eczemaBefore)) blog = blog.replace(eczemaBefore, eczemaAfter);
if (blog.includes(sumpBefore)) blog = blog.replace(sumpBefore, sumpAfter);
if (blog.includes(pipelineBefore)) blog = blog.replace(pipelineBefore, pipelineAfter);
if (blog.includes(labBefore)) blog = blog.replace(labBefore, labAfter);

fs.writeFileSync('blog.html', blog, 'utf8');
console.log('Updated blog.html successfully!');

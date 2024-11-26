const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked'); // Correctly import the marked function

const inputDir = 'content';
const outputDir = 'public';

// Create input directory if it doesn't exist
fs.ensureDirSync(inputDir);

// Create output directory if it doesn't exist
fs.ensureDirSync(outputDir);

// Traverse the input directory
fs.readdirSync(inputDir).forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, path.basename(file, path.extname(file)) + '.html');

    // Read the markdown file
    const markdown = fs.readFileSync(inputPath, 'utf-8');

    // Convert markdown to HTML
    const html = marked(markdown);

    // Write the HTML file
    fs.outputFileSync(outputPath, html);
});
const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const CleanCSS = require('clean-css');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

async function buildProject() {
    // Minify JavaScript
    const jsContent = fs.readFileSync('script.js', 'utf8');
    const minifiedJs = await minify(jsContent);
    fs.writeFileSync('dist/script.min.js', minifiedJs.code);

    // Minify CSS
    const cssContent = fs.readFileSync('styles.css', 'utf8');
    const minifiedCss = new CleanCSS().minify(cssContent);
    fs.writeFileSync('dist/styles.min.css', minifiedCss.styles);

    // Optimize and convert images
    await imagemin(['images/*.{jpg,png}'], {
        destination: 'dist/images',
        plugins: [
            imageminMozjpeg({ quality: 75 }),
            imageminPngquant({ quality: [0.6, 0.8] }),
            imageminWebp({ quality: 75 })
        ]
    });

    console.log('Build completed successfully!');
}

buildProject().catch(console.error); 
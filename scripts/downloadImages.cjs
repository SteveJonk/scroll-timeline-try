const https = require('https');
const fs = require('fs');
const path = require('path');

const IMAGE_BASE_URL = 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/';
const FOLDER = './src/assets/frames2';
const FRAME_COUNT = 148;

function downloadImage(url, filepath) {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('Downloaded ' + url);
        });
    }).on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there was an error
        console.error('Error downloading the image:', err.message);
    });
}

if (!fs.existsSync(FOLDER)) {
    fs.mkdirSync(FOLDER);
}

for (let i = 1; i < FRAME_COUNT; i++) {
    const imageUrl = IMAGE_BASE_URL + i.toString().padStart(4, '0') + '.jpg';
    const imageName = 'frame-' + i.toString() +'.jpg';
    const filePath = path.join(FOLDER, imageName);
    downloadImage(imageUrl, filePath);
}


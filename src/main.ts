import './style.scss'

// Array of image file names
const numFrames = 34;
const imageFiles = Array.from({ length: numFrames }, (_, i) => `frame-${i + 1}.jpg`);
console.log('env', import.meta.env.MODE)
const folderPath = import.meta.env.MODE === 'development' ? '/src/assets/frames/' : '/assets/';

imageFiles.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = folderPath + image;
    link.as = 'image';
    document.head.appendChild(link);
});
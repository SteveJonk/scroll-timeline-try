const numFrames = 147;
const imageFiles = Array.from({ length: numFrames }, (_, i) => `frame-${i + 1}.jpg`);
const folderPath = import.meta.env.MODE === 'development' ? '/src/assets/frames2/' : '/assets/';

imageFiles.forEach(image => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = folderPath + image;
    link.as = 'image';
    document.head.appendChild(link);
});


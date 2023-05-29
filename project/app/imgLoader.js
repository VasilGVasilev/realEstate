export const imageLoader = ({ src, width, quality }) => {
    return `https://testvgv.net/${src}?w=${width}&q=${quality || 75}`;
};

// Crucial for Image Component loading, which as a property 'loader' is not very explicit in the Next.js docs, used Phind AI for instructions

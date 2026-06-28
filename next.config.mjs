/** @type {import('next').NextConfig} */

const nextConfig = {
  serverExternalPackages: [
    "tesseract.js",
    "canvas",
    "sharp",
    "@xenova/transformers",
  ],
};

export default nextConfig;
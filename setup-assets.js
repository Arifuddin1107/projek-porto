const fs = require("fs");
const path = require("path");

const PUBLIC_IMAGES_DIR = path.join(__dirname, "public", "images");

// Create public/images directory if it doesn't exist
if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
  fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
  console.log("Created directory: public/images");
}

// Find possible profile images in current folder
const rootFiles = fs.readdirSync(__dirname);
const possibleImages = rootFiles.filter(
  (file) => file.toLowerCase().includes("img_5792") || file.toLowerCase().includes("img_5793")
);

if (possibleImages.length > 0) {
  const sourceImage = possibleImages[0]; // Choose first one (IMG_5792)
  const destPath = path.join(PUBLIC_IMAGES_DIR, "profile.jpg");

  try {
    fs.copyFileSync(path.join(__dirname, sourceImage), destPath);
    console.log(`Successfully copied profile image: ${sourceImage} -> public/images/profile.jpg`);
  } catch (err) {
    console.error("Failed to copy profile image:", err.message);
  }
} else {
  console.log("No default profile images (IMG_5792 or IMG_5793) found in the root folder.");
}

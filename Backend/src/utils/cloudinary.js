import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import sharp from "sharp";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const validateFileType = (filePath) => {
    const allowedFormats = ["jpeg", "jpg", "png", "webp", "gif"];
    const fileExtension = filePath.split('.').pop().toLowerCase();
    return allowedFormats.includes(fileExtension);
};

const compressImage = async (inputPath, outputPath) => {
    try {
        await sharp(inputPath)
            .resize({
                width: 1920, 
                height: 1920,
                fit: "inside" 
            })
            .jpeg({
                quality: 90, 
                mozjpeg: true 
            })
            .toFile(outputPath); 
        console.log("Image compressed successfully:", outputPath);
    } catch (error) {
        console.error("Error during compression:", error.message);
        throw error;
    }
};

const uploadOnCloudinary = async (localFilePath) => {
    if (!validateFileType(localFilePath)) {
        console.error("Unsupported file format. Please upload a valid image file.");
        return null;
    }
    const compressedFilePath = `compressed_${Date.now()}.jpg`;
    try {
        await compressImage(localFilePath, compressedFilePath);
        const response = await cloudinary.uploader.upload(compressedFilePath, {
            resource_type: "image"
        });
        fs.unlinkSync(localFilePath);
        fs.unlinkSync(compressedFilePath);
        return response;
    } catch (error) {
        if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
        if (fs.existsSync(compressedFilePath)) fs.unlinkSync(compressedFilePath);
        console.error("Error uploading to Cloudinary:", error.message);
        return null;
    }
};

export { uploadOnCloudinary };
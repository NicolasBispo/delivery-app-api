import upload from "@/config/multer";



export const adUpload = upload.array("adPhotos")

export const categoryUpload = upload.single("categoryIcon")
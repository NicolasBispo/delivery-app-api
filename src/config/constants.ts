import path from "path"

export const PORT = process.env.PORT || 3000
export const STORAGE_DIR = path.join(__dirname, "../../upload")
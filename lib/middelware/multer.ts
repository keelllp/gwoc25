// filepath: /c:/Users/pooji/OneDrive/Desktop/Altf4/gwoc25/lib/middleware/multer.ts
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;
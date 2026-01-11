// Cloudinary Configuration
export const CLOUDINARY_CONFIG = {
  cloudName: 'dds3bav6u', // Your cloud name from earlier
  baseUrl: 'https://res.cloudinary.com/dds3bav6u/video/upload'
};

// Helper function to get full audio URL
export const getAudioUrl = (filename) => {
  // If it's already a full URL, return as is
  if (filename.startsWith('http')) {
    return filename;
  }
  
  // Remove leading slash and 'audio/' if present
  const cleanFilename = filename.replace(/^\/?(audio\/)?/, '');
  
  // Return full Cloudinary URL
  return `${CLOUDINARY_CONFIG.baseUrl}/audio/${cleanFilename}`;
};

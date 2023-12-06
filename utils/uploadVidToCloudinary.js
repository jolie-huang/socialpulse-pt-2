import axios from "axios";

const uploadVid = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET);
    form.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME);

    // Additional parameters for video uploads
    form.append("resource_type", "video");


    const res = await axios.post(process.env.CLOUDINARY_URL_VID, form);

    return res.data.url;
  } catch (error) {
    console.error("Error uploading media:", error);
    return null;
  }
};

export default uploadVid; 
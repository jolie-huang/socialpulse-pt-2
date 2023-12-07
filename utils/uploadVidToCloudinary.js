import axios from "axios";

const uploadVid = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "socialpulse");
    form.append("cloud_name", "dgnigx1ez");

    // Additional parameters for video uploads
    form.append("resource_type", "video");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgnigx1ez/video/upload",
      form
    );

    return res.data.url;
  } catch (error) {
    console.error("Error uploading media:", error);
    return null;
  }
};

export default uploadVid;

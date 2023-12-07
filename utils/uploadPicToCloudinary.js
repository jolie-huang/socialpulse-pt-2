import axios from "axios";

const uploadPic = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "socialpulse");
    form.append("cloud_name", "dgnigx1ez");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dgnigx1ez/image/upload",
      form
    );

    return res.data.url;
  } catch (error) {
    return;
  }
};

export default uploadPic;

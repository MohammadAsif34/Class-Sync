import axios from "axios";

export const UploadNotesAPI = async (data, user) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("file", data.file);
    formData.append("program", user.program);
    formData.append("course", "CSEUGPC24");
    formData.append("department", user.department);
    formData.append("semester", user.semester);
    formData.append("uploadedBy", user._id);

    console.log("upload data ::>", formData);
    const api = `http://localhost:8800/class-sync/api/v1/notes/upload`;
    const res = await axios.post(api, formData, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Error login api ::> ", error);
    return { message: "Error login api!" };
  }
};

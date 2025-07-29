import axios from "axios";
export const LoginAPI = async (data) => {
  try {
    const api = `http://localhost:8800/class-sync/api/v1/auth/login`;
    const res = await axios.post(api, data, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Error login api ::> ", error);
    return { message: "Error login api!" };
  }
};
export const LogoutAPI = async () => {
  try {
    const api = `http://localhost:8800/class-sync/api/v1/auth/logout`;
    const res = await axios.post(api, {}, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Error logout api ::> ", error);
    return { message: "Error logout api!" };
  }
};
export const ProtectedAPI = async () => {
  try {
    const api = `http://localhost:8800/class-sync/api/v1/auth/protect/me`;
    const res = await axios.get(api, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log("Error protected api ::> ", error);
    return { message: "Error procted api!" };
  }
};

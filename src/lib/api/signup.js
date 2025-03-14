import axios from "axios";

const api = axios.create({
  baseURL: "https://sanity.io",
  headers: {
    Authorization: `Bearers ${token}`,
  },
});

const signUp = async () => {
  try {
    const response = await api.post("/auth");
    return response;
  } catch (error) {
    console.error("Error Signing Up due to: ", error);
    throw new Error("Email already registered or refresh and try again ");
  }
};

export default signUp;

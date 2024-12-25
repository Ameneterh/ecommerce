import { axiosInstance } from "./axiosInstance.js";

// register user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/backend/users/register",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// login user
export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/backend/users/login", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get current user
export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/backend/users/get-current-user");
    return response.data;
  } catch (error) {
    return error.message;
  }
};

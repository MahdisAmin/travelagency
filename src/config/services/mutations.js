import api from "../core/api";
import { useMutation } from "@tanstack/react-query";

const sendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};

export { sendOtp };

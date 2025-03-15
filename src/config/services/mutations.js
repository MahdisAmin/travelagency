import { setCookie } from "@/utils/cookie";
import api from "../core/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const sendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};

const checkOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useAddToBasket = () => {
  const mutationFn = (id) => api.put(`/basket/${id}`);
  return useMutation({ mutationFn });
};
const useCheckout = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("order", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["order"] });
    queryClient.invalidateQueries({ queryKey: ["user-order"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useUpdatePersonalInfo = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  };

  return useMutation({
    mutationFn,
    onSuccess,
  });
};

export {
  sendOtp,
  checkOtp,
  useAddToBasket,
  useCheckout,
  useUpdatePersonalInfo,
};

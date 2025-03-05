import { useQuery } from "@tanstack/react-query";
import api from "../core/api";

export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey });
};
export const useGetTours = () => {
  const queryKey = ["tour"];
  const queryFn = () => api.get("/tour");

  return useQuery({ queryKey, queryFn });
};

export const useGetBasket = () => {
  const queryKey = ["basket"];
  const queryFn = () => api.get("basket");

  return useQuery({ queryKey, queryFn });
};

export const useGetUserProfile = () => {
  const queryKey = ["profile"];
  const queryFn = () => api.get("/user/profile");

  return useQuery({ queryKey, queryFn });
};

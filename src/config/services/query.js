import { useQuery } from "@tanstack/react-query";
import api from "../core/api";

export const useGetUserData = () => {
  const queryFn = (data) => api.get("/user/profile", data);
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
export const useGetUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};
export const useGetUserTransactions = () => {
  const queryFn = () => api.get("user/transactions");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};

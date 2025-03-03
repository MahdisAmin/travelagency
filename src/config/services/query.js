import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";
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
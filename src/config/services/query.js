import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";
import api from "../core/api";



export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey });
};
export const useGetTours = (query) => {
  const url = "tour?" + QueryString.stringify(query);
  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];
  return useQuery({ queryFn, queryKey, enabled: false });
};

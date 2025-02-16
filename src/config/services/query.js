const { useQuery } = require("react-query");
const { default: api } = require("../core/api");

export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey });
};

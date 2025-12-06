import { useQuery } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useChildProfile = () => {
  return useQuery({
    queryKey: ["child", "profile"],
    queryFn: childApi.getProfile,
  });
};

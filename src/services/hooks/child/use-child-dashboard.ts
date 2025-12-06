import { useQuery } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useChildDashboard = () => {
  return useQuery({
    queryKey: ["child", "dashboard"],
    queryFn: childApi.getDashboard,
  });
};

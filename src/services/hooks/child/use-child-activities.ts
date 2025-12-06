import { useQuery } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useChildActivities = () => {
  return useQuery({
    queryKey: ["child", "activities"],
    queryFn: childApi.getChildActivities,
  });
};

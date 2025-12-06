import { useQuery } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useChildProgress = () => {
  return useQuery({
    queryKey: ["child", "progress"],
    queryFn: childApi.getChildProgress,
  });
};

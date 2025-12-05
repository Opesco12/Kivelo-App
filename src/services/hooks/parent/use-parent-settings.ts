import { useQuery } from "@tanstack/react-query";
import { parentApi } from "../../parent";

export const useParentDashboard = () => {
  return useQuery({
    queryKey: ["parent", "setting"],
    queryFn: parentApi.getSettings,
  });
};

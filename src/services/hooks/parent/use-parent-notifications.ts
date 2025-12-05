import { useQuery } from "@tanstack/react-query";
import { parentApi } from "../../parent";

export const useParentNotifications = () => {
  return useQuery({
    queryKey: ["parent", "notifications"],
    queryFn: parentApi.getNotifications,
  });
};

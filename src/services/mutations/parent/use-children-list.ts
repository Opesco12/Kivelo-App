import { useQuery } from "@tanstack/react-query";
import { parentApi } from "../../parent";

export const useChildrenList = () => {
  return useQuery({
    queryKey: ["children", "list"],
    queryFn: parentApi.getChildrenList,
  });
};

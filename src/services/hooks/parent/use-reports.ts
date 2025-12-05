import { useQuery } from "@tanstack/react-query";
import { parentApi } from "../../parent";

export const useReports = () => {
  return useQuery({
    queryKey: ["parent", "report"],
    queryFn: parentApi.getReports,
  });
};

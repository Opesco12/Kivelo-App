import { useMutation, useQueryClient } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useDeleteChildActivity = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: childApi.deleteActivity,
    onSuccess: () => qc.invalidateQueries(["child", "activities"]),
  });
};

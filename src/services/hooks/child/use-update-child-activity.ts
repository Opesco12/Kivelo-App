import { useMutation, useQueryClient } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useUpdateChildActivity = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: childApi.updateActivity,
    onSuccess: () => qc.invalidateQueries(["child", "activities"]),
  });
};

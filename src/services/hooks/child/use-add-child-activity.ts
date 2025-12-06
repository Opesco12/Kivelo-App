import { useMutation, useQueryClient } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useAddChildActivity = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: childApi.addNewAcitivity,
    onSuccess: () => qc.invalidateQueries(["child", "activities"]),
  });
};

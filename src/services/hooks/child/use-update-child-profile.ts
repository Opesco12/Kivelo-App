import { useMutation, useQueryClient } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useUpdateChildProfile = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: childApi.updateChildProfile,
    onSuccess: () => qc.invalidateQueries(["child", "profile"]),
  });
};

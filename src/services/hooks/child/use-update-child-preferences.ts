import { useMutation, useQueryClient } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useUpdateChildPreferences = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: childApi.updateChildPreference,
    onSuccess: () => qc.invalidateQueries(["child", "profile"]),
  });
};

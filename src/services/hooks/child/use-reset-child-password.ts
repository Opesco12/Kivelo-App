import { useMutation } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useResetChildPassword = () => {
  return useMutation({
    mutationFn: childApi.resetChildPassword,
  });
};

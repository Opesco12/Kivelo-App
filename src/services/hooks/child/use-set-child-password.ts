import { useMutation } from "@tanstack/react-query";
import { childApi } from "../../child";

export const useSetChildPassword = () => {
  return useMutation({
    mutationFn: childApi.setChildPassword,
  });
};

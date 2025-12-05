import { useMutation } from "@tanstack/react-query";

import { childApi } from "../../child";

export const useChildLogin = () => {
  return useMutation({
    mutationFn: childApi.login,
  });
};

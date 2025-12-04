import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";

export const useLogin = () => {
  return useMutation({
    mutationFn: parentApi.login,
  });
};

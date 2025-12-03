import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";
import { ParentLoginResponse, ParentLoginCredentials } from "../../types/auth";

export const useLogin = () => {
  return useMutation<ParentLoginResponse, Error, ParentLoginCredentials>({
    mutationFn: parentApi.login,

    onSuccess: async (data) => {
      console.log(data.message);
    },
    onError: (error) => {},
  });
};

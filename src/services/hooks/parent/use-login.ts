import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";
import { ParentLoginResponse, ParentLoginCredentials } from "../../types/auth";

export const useLogin = () => {
  return useMutation<
    { data: ParentLoginResponse; status: number },
    Error,
    ParentLoginCredentials
  >({
    mutationFn: parentApi.login,
  });
};

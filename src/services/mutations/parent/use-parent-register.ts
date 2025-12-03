import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";
import {
  ParentRegisterCredentials,
  ParentRegisterResponse,
} from "../../types/auth";

export const useParentRegister = () => {
  return useMutation<
    { data: ParentRegisterResponse; status: number },
    Error,
    ParentRegisterCredentials
  >({
    mutationFn: parentApi.register,

    onSuccess: async ({ data }) => {
      console.log(data.message);
    },
    onError: (error) => {},
  });
};

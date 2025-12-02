import { useMutation, useQueryClient } from "@tanstack/react-query";

import { parentApi } from "./parent";
import {
  ParentRegisterCredentials,
  ParentRegisterResponse,
} from "./types/auth";

export const useParentRegister = () => {
  const queryClient = useQueryClient();

  return useMutation<ParentRegisterResponse, Error, ParentRegisterCredentials>({
    mutationFn: parentApi.register,

    onSuccess: async (data) => {
      console.log(data.message);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

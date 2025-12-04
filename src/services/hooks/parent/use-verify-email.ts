import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";
import { VerifyEmailCredentials, VerifyEmailResponse } from "../../types/auth";

export const useVerifyEmail = () => {
  return useMutation<VerifyEmailResponse, Error, VerifyEmailCredentials>({
    mutationFn: parentApi.verifyEmail,

    onSuccess: async (data) => {
      //   console.log(data.message);
    },
    onError: (error) => {},
  });
};

export const useResendVerification = () => {
  return useMutation<VerifyEmailResponse, Error, VerifyEmailCredentials>({
    mutationFn: parentApi.resendVerification,
  });
};

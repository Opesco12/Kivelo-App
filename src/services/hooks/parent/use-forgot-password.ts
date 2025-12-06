import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";

export const useForgotPassword = () => {
  return useMutation<any, Error, { email: string }>({
    mutationFn: parentApi.forgotPassword,
  });
};

export const useVerifyResetToken = () => {
  return useMutation<any, Error, { email: string; token: string }>({
    mutationFn: parentApi.verifyResetToken,
  });
};

export const useResetPassword = () => {
  return useMutation<any, Error, { email: string; token: string; password: string }>({
    mutationFn: parentApi.resetPassword,
  });
};

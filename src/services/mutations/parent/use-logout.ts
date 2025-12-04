import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";

export const useLogout = () => {
  return useMutation({
    mutationFn: parentApi.logout,
  });
};

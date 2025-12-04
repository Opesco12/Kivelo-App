import { useMutation } from "@tanstack/react-query";

import { parentApi } from "../../parent";

export const useGenerateCode = () => {
  return useMutation({
    mutationFn: parentApi.addChild,
  });
};

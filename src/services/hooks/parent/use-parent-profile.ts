import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { parentApi } from "../../parent";
import {
  ParentProfile,
  UpdateParentProfileCredentials,
} from "../../types/Parent";

export const useParentProfile = () => {
  return useQuery({
    queryKey: ["parent", "profile"],
    queryFn: parentApi.getParentProfile,
  });
};

export const useUpdateParentProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<
    ParentProfile["parent"],
    Error,
    UpdateParentProfileCredentials
  >({
    mutationFn: parentApi.updateParentProfile,
    onSuccess: (updatedParent) => {
      // update the cached profile
      queryClient.setQueryData<ParentProfile>(["parent", "profile"], (old) => {
        if (!old) return old;
        return {
          ...old,
          parent: {
            ...old.parent,
            ...updatedParent,
            user: {
              ...old.parent.user,
              ...updatedParent.user,
            },
          },
        };
      });
    },
  });
};

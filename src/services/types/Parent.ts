import type { Child } from "@/src/types/child";

export type GetChildrenResponse = {
  children: Child[];
  success: boolean;
  totalChildren: number;
};

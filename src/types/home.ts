import { HomePage } from "@prisma/client";
import { BaseOptions } from "./app";

export interface HomeSlice {
  items: HomePage[];
  isLoading: boolean;
  error: Error | null;
}
export interface CreateHomeText extends BaseOptions {
  description: string;
}
export interface UpdateHomeText extends BaseOptions {
  id: number;
  description: string;
}
export interface DeleteHomeText extends BaseOptions {
  id: number;
}

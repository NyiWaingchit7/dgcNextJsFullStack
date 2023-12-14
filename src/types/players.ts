import { Head, Player, Role } from "@prisma/client";
import { BaseOptions } from "./app";

export interface PlayerSliceType {
  items: Player[];
  isLoading: boolean;
  error: Error | null;
}
export interface CreatePlayer extends BaseOptions {
  name: string;
  age: number;
  city: string;
  joinDate: number;
  role: Role;
  head?: Head | null | string;
}
export interface UpdatePlayer extends BaseOptions {
  id: number;
  name: string;
  age: number;
  city: string;
  joinDate: number;
  role: Role;
  head?: Head | null | string;
}
export interface DeletePlayer extends BaseOptions {
  id: number;
}

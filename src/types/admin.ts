import { Admin, Type } from "@prisma/client";
import { BaseOptions } from "./app";

export interface AdminSlice {
  items: Admin[];
  isLoading: Boolean;
  error: Error | null;
}

export interface CreateAdmin extends BaseOptions {
  name: string;
  email: string;
  phone?: string;
  password: string;
  address?: string;
  assetUrl?: string;
  type: Type;
}
export interface UpdateAdmin extends BaseOptions {
  id: number;
  name: string;
  email: string;
  phone?: string;
  password: string;
  address?: string;
  assetUrl?: string;
  type: Type;
}
export interface DeleteAdmin extends BaseOptions {
  id: number;
}

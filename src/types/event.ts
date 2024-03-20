import { Event } from "@prisma/client";
import { BaseOptions } from "./app";

export interface EventSlice {
  items: Event[];
  isLoading: Boolean;
  error: Error | null;
}

export interface CreateEvent extends BaseOptions {
  title: string;
  assetUrl?: string;
  ended?: boolean;
  description: string;
}
export interface UpdateEvent extends BaseOptions {
  id: number;
  title: string;
  assetUrl?: string;
  ended?: Boolean;
  description: string;
}
export interface DeleteEvent extends BaseOptions {
  id: number;
}

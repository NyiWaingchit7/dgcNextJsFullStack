import { Achievement } from "@prisma/client";
import { BaseOptions } from "./app";

export interface AchievementSlice {
  items: Achievement[];
  isLoading: boolean;
  error: Error | null;
}
export interface CreateAchievement extends BaseOptions {
  year: number;
  description: string;
  assetUrl?: string;
}
export interface UpdateAchievement extends BaseOptions {
  id: number;
  year: number;
  description: string;
  assetUrl?: string;
}
export interface DeleteAchievement extends BaseOptions {
  id: number;
}

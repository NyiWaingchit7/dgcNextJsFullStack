import { PlayerMatches } from "@prisma/client";
import { BaseOptions } from "./app";

export interface PlayerMatchesSlice {
  items: PlayerMatches[];
  isLoading: boolean;
  error: Error | null;
}
export interface UpdatePlayerMatches extends BaseOptions {
  id: number;
  win: number;
  draw: number;
  lose: number;
  winRate: number;
  playerId: number;
}

import { OpponentTeam } from "@prisma/client";
import { BaseOptions } from "./app";

export interface OpponentTeamSlice {
  items: OpponentTeam[];
  isLoading: boolean;
  error: Error | null;
}
export interface CreateOpponentTeam extends BaseOptions {
  name: string;
}
export interface UpdateOpponentTeam extends BaseOptions {
  id: number;
  name: string;
}
export interface DeleteOpponentTeam extends BaseOptions {
  id: number;
}

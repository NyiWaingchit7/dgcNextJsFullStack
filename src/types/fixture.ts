import { Fixture } from "@prisma/client";
import { BaseOptions } from "./app";

export interface FixtureSlice {
  items: Fixture[];
  isLoading: boolean;
  error: Error | null;
}
export interface CreateFixture extends BaseOptions {
  opponentTeamId: number;
}
export interface UpdateFixture extends BaseOptions {
  id: number;
  opponentTeamId: number;
  myTeamResult: number;
  opponentTeamResult: number;
}
export interface DeleteFixture extends BaseOptions {
  id: number;
}

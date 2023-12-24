import { AppSlice } from "@/types/app";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setHomeData } from "./homeSlice";
import { setPlayer } from "./playersSlice";
import { setPlayerMatches } from "./playerMatchesSlice";
import { setOpponentTeam } from "./opponentTeamSlice";
const initialState: AppSlice = {
  init: false,
  isLoading: false,
  error: null,
};
export const fetchAppData = createAsyncThunk(
  "app/data",
  async (option, thunApi) => {
    const response = await fetch(`${config.apiBaseUrl}/admin/app`);
    const { homeData, playerData, playerMatches, opponentTeam } =
      await response.json();
    thunApi.dispatch(setInit(true));
    thunApi.dispatch(setHomeData(homeData));
    thunApi.dispatch(setPlayer(playerData));
    thunApi.dispatch(setPlayerMatches(playerMatches));
    thunApi.dispatch(setOpponentTeam(opponentTeam));
  }
);

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setInit: (state, action) => {
      state.init = action.payload;
    },
  },
});
export const { setInit } = appSlice.actions;
export default appSlice.reducer;

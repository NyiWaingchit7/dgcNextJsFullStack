import { PlayerMatchesSlice } from "@/types/playerMatches";
import { createSlice } from "@reduxjs/toolkit";
const initialState: PlayerMatchesSlice = {
  items: [],
  isLoading: false,
  error: null,
};

const playerMatchesSlice = createSlice({
  name: "playerMatchesSlic",
  initialState,
  reducers: {
    setPlayerMatches: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setPlayerMatches } = playerMatchesSlice.actions;
export default playerMatchesSlice.reducer;

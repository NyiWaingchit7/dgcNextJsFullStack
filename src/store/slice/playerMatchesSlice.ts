import { PlayerMatchesSlice, UpdatePlayerMatches } from "@/types/playerMatches";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: PlayerMatchesSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const updatePlayerMatches = createAsyncThunk(
  "update/playerMatches",
  async (options: UpdatePlayerMatches, thunkApi) => {
    const { id, win, draw, lose, playerId, onSuccess, onError } = options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/player-match?id=${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            win,
            draw,
            lose,
            playerId,
          }),
        }
      );
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

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

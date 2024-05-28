import {
  CreateOpponentTeam,
  DeleteOpponentTeam,
  OpponentTeamSlice,
  UpdateOpponentTeam,
} from "@/types/opponentTeam";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: OpponentTeamSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const createOpponentTeam = createAsyncThunk(
  "crate/opponentTeam",
  async (option: CreateOpponentTeam, thunkApi) => {
    const { name, assetUrl, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/opponent-team`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          assetUrl,
        }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updateOpponentTeam = createAsyncThunk(
  "update/opponentTeam",
  async (options: UpdateOpponentTeam, thunkApi) => {
    const { id, name, assetUrl, onSuccess, onError } = options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/opponent-team?id=${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
            assetUrl,
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
export const deleteOpponentTeam = createAsyncThunk(
  "delete/opponentTeam",
  async (options: DeleteOpponentTeam, thunkApi) => {
    const { id, onSuccess, onError } = options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/opponent-team?id=${id}`,
        {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        }
      );

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const opponentTeamSlice = createSlice({
  name: "opponentTeamSlice",
  initialState,
  reducers: {
    setOpponentTeam: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setOpponentTeam } = opponentTeamSlice.actions;
export default opponentTeamSlice.reducer;

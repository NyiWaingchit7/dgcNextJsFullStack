import {
  CreateFixture,
  DeleteFixture,
  FixtureSlice,
  UpdateFixture,
} from "@/types/fixture";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: FixtureSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const createFixture = createAsyncThunk(
  "crate/fixture",
  async (option: CreateFixture, thunkApi) => {
    const { opponentTeamId, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/fixture`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          opponentTeamId,
        }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updateFixture = createAsyncThunk(
  "update/fixture",
  async (options: UpdateFixture, thunkApi) => {
    const {
      id,
      opponentTeamId,
      myTeamResult,
      opponentTeamResult,
      onSuccess,
      onError,
    } = options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/fixture?id=${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            opponentTeamId,
            myTeamResult,
            opponentTeamResult,
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
export const deleteFixture = createAsyncThunk(
  "delete/fixture",
  async (options: DeleteFixture, thunkApi) => {
    const { id, onSuccess, onError } = options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/fixture?id=${id}`,
        {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id }),
        }
      );

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const fixtureSlice = createSlice({
  name: "fixtureSlice",
  initialState,
  reducers: {
    setFixture: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setFixture } = fixtureSlice.actions;
export default fixtureSlice.reducer;

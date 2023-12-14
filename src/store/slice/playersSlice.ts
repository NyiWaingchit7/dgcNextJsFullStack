import {
  CreatePlayer,
  DeletePlayer,
  PlayerSliceType,
  UpdatePlayer,
} from "@/types/players";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState: PlayerSliceType = {
  items: [],
  isLoading: false,
  error: null,
};
export const createPlayer = createAsyncThunk(
  "crate/player",
  async (option: CreatePlayer, thunkApi) => {
    const { name, age, city, joinDate, role, head, onSuccess, onError } =
      option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/player`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          age,
          city,
          joinDate,
          role,
          head: head ? head : null,
        }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updatePlayer = createAsyncThunk(
  "update/player",
  async (options: UpdatePlayer, thunkApi) => {
    const { id, name, age, city, joinDate, role, head, onSuccess, onError } =
      options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/player?id=${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
            age,
            city,
            joinDate,
            role,
            head: head ? head : null,
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
export const deletePlayer = createAsyncThunk(
  "delete/player",
  async (options: DeletePlayer, thunkApi) => {
    const { id, onSuccess, onError } = options;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/player?id=${id}`,
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

const playersSlice = createSlice({
  name: "playersSlice",
  initialState,
  reducers: {
    setPlayer: (store, action) => {
      store.items = action.payload;
    },
  },
});
export const { setPlayer } = playersSlice.actions;

export default playersSlice.reducer;

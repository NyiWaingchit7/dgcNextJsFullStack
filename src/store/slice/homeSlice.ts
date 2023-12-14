import {
  CreateHomeText,
  DeleteHomeText,
  HomeSlice,
  UpdateHomeText,
} from "@/types/home";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: HomeSlice = {
  items: [],
  isLoading: false,
  error: null,
};
export const createHomeText = createAsyncThunk(
  "create/homeText",
  async (options: CreateHomeText, thunkApi) => {
    const { description, onSuccess, onError } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/home`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ description }),
      });
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const updateHomeText = createAsyncThunk(
  "update/homeText",
  async (options: UpdateHomeText, thunkApi) => {
    const { id, description, onSuccess, onError } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/home?id=${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ description }),
      });
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
export const deleteHomeText = createAsyncThunk(
  "delete/homeText",
  async (options: DeleteHomeText, thunkApi) => {
    const { id, onSuccess, onError } = options;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/home?id=${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id }),
      });

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setHomeData } = homeSlice.actions;
export default homeSlice.reducer;

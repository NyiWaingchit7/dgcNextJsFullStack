import {
  CreateEvent,
  DeleteEvent,
  EventSlice,
  UpdateEvent,
} from "@/types/event";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: EventSlice = {
  items: [],
  isLoading: false,
  error: null,
};
export const createEvent = createAsyncThunk(
  "create/event",
  async (option: CreateEvent, thunkApi) => {
    const { title, description, ended, assetUrl, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/event`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, description, ended, assetUrl }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError;
    }
  }
);
export const updateEvent = createAsyncThunk(
  "update/event",
  async (option: UpdateEvent, thunkApi) => {
    const { id, title, description, ended, assetUrl, onSuccess, onError } =
      option;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/event?id=${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id, title, description, ended, assetUrl }),
        }
      );
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError;
    }
  }
);
export const deleteEvent = createAsyncThunk(
  "delete/event",
  async (option: DeleteEvent, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/event?id=${id}`,
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
const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setEvent } = eventSlice.actions;
export default eventSlice.reducer;

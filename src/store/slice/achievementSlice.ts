import {
  AchievementSlice,
  CreateAchievement,
  DeleteAchievement,
  UpdateAchievement,
} from "@/types/achievement";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AchievementSlice = {
  items: [],
  isLoading: false,
  error: null,
};
export const createAchievement = createAsyncThunk(
  "create/achievement",
  async (option: CreateAchievement, thunkApi) => {
    const { year, description, assetUrl, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/achievement`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ year, description }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError;
    }
  }
);
export const updateAchievement = createAsyncThunk(
  "update/achievement",
  async (option: UpdateAchievement, thunkApi) => {
    const { id, year, description, assetUrl, onSuccess, onError } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/achievement`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, year, description }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError;
    }
  }
);
export const deleteAchievement = createAsyncThunk(
  "delete/achievement",
  async (option: DeleteAchievement, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/achievement?id=${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);
const achievementSlice = createSlice({
  name: "achievementSlice",
  initialState,
  reducers: {
    setAchievement: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setAchievement } = achievementSlice.actions;
export default achievementSlice.reducer;

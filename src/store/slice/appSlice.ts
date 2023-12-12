import { AppSlice } from "@/types/app";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addHomeData, setHomeData } from "./homeSlice";
const initialState: AppSlice = {
  init: false,
  isLoading: false,
  error: null,
};
export const fetchAppData = createAsyncThunk(
  "app/data",
  async (option, thunApi) => {
    const response = await fetch(`${config.apiBaseUrl}/admin/app`);
    const { homeData } = await response.json();

    thunApi.dispatch(setHomeData(homeData));
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

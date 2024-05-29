import {
  AdminSlice,
  CreateAdmin,
  DeleteAdmin,
  UpdateAdmin,
} from "@/types/admin";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AdminSlice = {
  items: [],
  isLoading: false,
  error: null,
};

export const createAdminAccount = createAsyncThunk(
  "create/admin",
  async (option: CreateAdmin, thunkApi) => {
    const {
      name,
      email,
      address,
      phone,
      type,
      password,
      assetUrl,
      onSuccess,
      onError,
    } = option;
    try {
      const response = await fetch(`${config.apiBaseUrl}/admin/admin-list`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
          type,
          password,
          assetUrl,
        }),
      });
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError;
    }
  }
);
export const updateAdminAccount = createAsyncThunk(
  "update/admin",
  async (option: UpdateAdmin, thunkApi) => {
    const {
      id,
      name,
      email,
      address,
      phone,
      type,
      assetUrl,
      password,
      onSuccess,
      onError,
    } = option;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/admin-list?id=${id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            address,
            phone,
            type,
            assetUrl,
            password,
          }),
        }
      );
      const data = await response.json();
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError;
    }
  }
);
export const deleteAdminAccount = createAsyncThunk(
  "delete/admin",
  async (option: DeleteAdmin, thunkApi) => {
    const { id, onSuccess, onError } = option;
    try {
      const response = await fetch(
        `${config.apiBaseUrl}/admin/admihn-list?id=${id}`,
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
const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;

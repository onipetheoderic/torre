import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../../utils/apiService";

interface IDashboardState {
  trades: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  trades: [],
  loading: "idle",
} as IDashboardState;

export const getAllHosts = createAsyncThunk(
  "dashboard/getAllHosts",
  async () => {
    const response = await apiService.getAllHosts();
    return response;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllHosts.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    });
  },
});

export default dashboardSlice.reducer;

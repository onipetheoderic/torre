import { combineReducers } from "@reduxjs/toolkit";
import dashboardSlice from "./features/dashboard/dashboardSlice";

const rootReducer = combineReducers({
  dashboard: dashboardSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

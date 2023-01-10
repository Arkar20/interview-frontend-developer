import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { chatReducer } from "./modules";
const debug = process.env.NODE_ENV === "development";

export const store = () =>
  configureStore({
    reducer: {
      chats: chatReducer,
    },
  });
export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = ReturnType<AppStore["dispatch"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const wrapper = createWrapper<AppStore>(store, { debug });

export { wrapper };

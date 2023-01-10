import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { I_chats, I_chatSingle } from "../../types";

const initialState: I_chats = {
  chats: [],
  loading: false,
};

export const chatsSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChats: (state, action: PayloadAction<I_chatSingle[]>) => {
      state.chats = action.payload;
    },
  },
});

export const { addChats } = chatsSlice.actions;

export const selectChats = (state: RootState) => state.chats;

const chatReducer = chatsSlice.reducer;

export { chatReducer };

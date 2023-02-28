import { createSlice } from "@reduxjs/toolkit";
import { Card } from "types";

interface State {
  cards: Card[];
  imgs: string[];
}

const initialState: State = {
  cards: [],
  imgs: [],
};

const cardModule = createSlice({
  name: "cardModule",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setImgs: (state, action) => {
      state.imgs = action.payload;
    },
  },
});

export default cardModule;

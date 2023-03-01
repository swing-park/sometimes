import { createSlice } from "@reduxjs/toolkit";
import { Card } from "types";

interface State {
  cards: Card[];
}

const initialState: State = {
  cards: [
    {
      id: "",
      content: "",
      nickname: "",
      createdAt: "",
      modifiedAt: "",
      likes: 0,
      image: "",
    },
  ],
};

const cardModule = createSlice({
  name: "cardModule",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export default cardModule;

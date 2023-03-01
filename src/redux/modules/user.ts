import { createSlice } from "@reduxjs/toolkit";

interface State {
  nickname: string;
}

const initialState: State = {
  nickname: "",
};

const userModule = createSlice({
  name: "userModule",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export default userModule;

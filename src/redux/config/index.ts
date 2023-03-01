import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cardModule from "redux/modules/card";

const rootReducer = combineReducers({
  cardReducer: cardModule.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof rootReducer>;

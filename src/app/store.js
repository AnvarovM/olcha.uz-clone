import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import likeReducer from '../slices/likedSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    like: likeReducer
  },
});

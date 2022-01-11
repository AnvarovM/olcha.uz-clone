import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const LikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likeToFavorite: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { likeToFavorite } = LikeSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const likedItems = (state) => state.like.items;

export default LikeSlice.reducer;

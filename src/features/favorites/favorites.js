import { createSlice } from "@reduxjs/toolkit";

const IssavedFavorites = localStorage.getItem("favorites");

const initialState = {
  favorites: IssavedFavorites ? JSON.parse(IssavedFavorites) : {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    updateFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { updateFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

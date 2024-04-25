import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "../features/favorites/favorites.js";
import filtersReducer from "../features/filters/filters.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filters: filtersReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
});

setupListeners(store.dispatch);

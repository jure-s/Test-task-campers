import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vehicle_type_filter: "",
  vehicle_equipment_filter: [],
  location: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateVehicleType: (state, action) => {
      state.vehicle_type_filter = action.payload;
    },
    updateVehicleEquipment: (state, action) => {
      state.vehicle_equipment_filter = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { updateVehicleType, updateVehicleEquipment, updateLocation } =
  filtersSlice.actions;

export default filtersSlice.reducer;

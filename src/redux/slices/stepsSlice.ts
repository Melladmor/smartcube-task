import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StepT } from "../type";
import { RootState } from "../store";

type StepsSliceTepy = {
  steps: StepT[];
  currentStep: number;
};

const initialState: StepsSliceTepy = {
  steps: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ],
  currentStep: 1,
};

const stepsSlice = createSlice({
  name: "stepsSlice",
  initialState,
  reducers: {
    handleChangeSteps: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { handleChangeSteps } = stepsSlice.actions;
export const selectStepSliceValues = (state: RootState) => state.stepsSlice;
export default stepsSlice.reducer;

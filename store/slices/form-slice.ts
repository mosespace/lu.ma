import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  step: number;
  data: {
    username: string;
    maxParticipants: number;
    eventType: string;
    ticketType: string;
    imageUrl: string;
  };
}

const initialState: FormState = {
  step: 1,
  data: {
    username: "",
    maxParticipants: 0,
    eventType: "",
    ticketType: "",
    imageUrl: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    updateForm: (state, action: PayloadAction<Partial<FormState["data"]>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { nextStep, prevStep, updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;

import { IEvent } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IEvent = {
  step: 1,
  formData: {
    name: "",
    slug: "",
    maxParticipants: "",
    eventType: "",
    ticketType: "",
    photo: "",
    posters: [],
    categoryId: "",
    tags: [],
    country: "",
    link: "",
    ticketPrice: "",
    state: "",
    address1: "",
    address2: "",
    email: "",
    tel: "",
    description: "",
    shortDescription: "",
    startDate: new Date(),
    endDate: new Date(),
  },
};

const formSlice = createSlice({
  name: "creatingEvent",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.step = action.payload;
    },
    updateFormData: (
      state,
      action: PayloadAction<Partial<IEvent["formData"]>>
    ) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { setCurrentStep, updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;

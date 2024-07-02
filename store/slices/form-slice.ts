import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  step: number;
  formData: {
    name: string;
    maxParticipants: string;
    eventType?: string;
    ticketType?: string;
    photo?: string;
    categoryIds?: string[];
    tags?: { id: string; text: string }[];
    country?: string;
    state?: string;
    address1?: string;
    address2?: string;
    email?: string;
    tel?: string;
    link?: string;
    ticketPrice?: string;
    description?: string;
    startDate: Date;
    endDate: Date;
  };
}

const initialState: FormState = {
  step: 1,
  formData: {
    name: "",
    maxParticipants: "",
    eventType: "",
    ticketType: "",
    photo: "",
    categoryIds: [],
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
      action: PayloadAction<Partial<FormState["formData"]>>
    ) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { setCurrentStep, updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;

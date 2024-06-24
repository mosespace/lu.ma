import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  step: number;
  formData: {
    name: string;
    maxParticipants: string;
    eventType?: string;
    ticketType?: string;
    photo?: string;
    categories?: string[];
    tags?: { id: string; text: string }[];
    country?: string;
    state?: string;
    address1?: string;
    address2?: string;
    email?: string;
    tel?: string;
    description?: string;
    dateRange?: {
      from: string;
      to: string;
    };
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
    categories: [],
    tags: [],
    country: "",
    state: "",
    address1: "",
    address2: "",
    email: "",
    tel: "",
    description: "",
    dateRange: { from: "", to: "" },
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

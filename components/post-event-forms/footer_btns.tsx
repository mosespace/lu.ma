import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setCurrentStep } from "@/store/slices/form-slice";
import { Button } from "../ui/button";

export default function FooterBtns() {
  const step = useSelector((state: any) => state.creatingEvent.step);
  const formData = useSelector((state: any) => state.creatingEvent.formData);

  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(setCurrentStep(step - 1));
  };

  const handleSubmit = () => {
    // Submit formData to your database
    console.log("Final Form Data: ", formData);
    dispatch(resetForm());
  };
  return (
    <div className='flex max-w-4xl w-full mx-auto justify-end gap-2 items-end'>
      {step > 1 && (
        <Button
          type='button'
          onClick={handlePrevious}
          className='w-[10rem] mt-4'
        >
          Previous
        </Button>
      )}

      {(step === 1 || step === 2 || step === 3) && (
        <Button
          type='submit'
          // onClick={() => handleSubmit()}
          className='w-[10rem] mt-4'
        >
          Save and Continue{" "}
        </Button>
      )}

      {step === 4 && (
        <Button
          type='submit'
          onClick={() => handleSubmit()}
          className='w-[10rem] mt-4'
        >
          Confirm and Submit
        </Button>
      )}
    </div>
  );
}

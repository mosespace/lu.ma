"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setCurrentStep } from "@/store/slices/form-slice";
import { Button } from "../ui/button";
import { createEvent } from "@/actions/events";
import { Loader } from "lucide-react";
import { useToast } from "../ui/use-toast";

export default function FooterBtns() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const step: any = useSelector((state: any) => state.creatingEvent.step);
  const formData = useSelector((state: any) => state.creatingEvent.formData);

  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(setCurrentStep(step - 1));
  };

  async function handleSubmit() {
    // Submit formData to your database
    // console.log("function running");
    console.log("Final Form Data: ", formData);
    setLoading(true);
    try {
      const event: any = await createEvent({ data: formData });
      console.log(event);

      toast({
        title: "Event has been created successfully",
      });
      dispatch(setCurrentStep(step + 1));
      // dispatch(resetForm());
    } catch (error: any) {
      toast({
        title: "Event creation has failed...",
        variant: "destructive",
      });
      console.error("Event creation error:", error);
    } finally {
      setLoading(false);
    }
  }
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
          onClick={handleSubmit}
          className='flex gap-2 w-[15rem] mt-4'
        >
          {loading && <Loader className='animate-spin size-4' />}
          Confirm and Submit
        </Button>
      )}
    </div>
  );
}

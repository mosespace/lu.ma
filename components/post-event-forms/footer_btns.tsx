"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "@/store/slices/form-slice";
import { Button } from "../ui/button";
import { createEvent } from "@/actions/events";
import { Loader } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { getCurrentUser } from "@/lib/authProvider";

export default function FooterBtns({ loading }: { loading?: boolean }) {
  const step: any = useSelector((state: any) => state.creatingEvent.step);

  const dispatch = useDispatch();

  const handlePrevious = () => {
    dispatch(setCurrentStep(step - 1));
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
        <Button type='submit' className='w-[10rem] mt-4'>
          Save and Continue{" "}
        </Button>
      )}

      {step === 4 && (
        <Button
          disabled={loading}
          type='submit'
          className='flex gap-2 w-[15rem] mt-4'
        >
          {loading && <Loader className='animate-spin size-4' />}
          Confirm and Submit
        </Button>
      )}
    </div>
  );
}

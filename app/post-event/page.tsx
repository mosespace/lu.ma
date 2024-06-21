"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { ProgressTracker } from "@/components/progress";
import { nextStep, prevStep } from "@/store/slices/form-slice";
import { PostEventFormOne } from "@/components/post-event-forms/post-event-form-one";
import { PostEventFormTwo } from "@/components/post-event-forms/post-event-form-two";
import { PostEventFormThree } from "@/components/post-event-forms/post-event-form-three";
import { PostEventFormFour } from "@/components/post-event-forms/post-event-form-four";

const Page: React.FC = () => {
  const step = useSelector((state: any) => state.form.step);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrevious = () => {
    dispatch(prevStep());
  };

  return (
    <div className='min-h-screen py-8 w-full flex flex-col items-center justify-center'>
      <div className='flex w-full flex-col items-center justify-center'>
        {step === 1 && <h2 className='font-bold text-xl'>Мастер-Класс</h2>}
        {step === 2 && <h2 className='font-bold text-xl'>Location-Класс</h2>}
        {step === 3 && <h2 className='font-bold text-xl'>Description-Класс</h2>}
        {step === 4 && <h2 className='font-bold text-xl'>Date-Класс</h2>}

        <p className='mb-4'>Шаг {step} из 4</p>
        <ProgressTracker />
      </div>

      <div className='flex bg-white max-w-4xl w-full mx-auto mt-4 shadow-lg rounded-lg p-12'>
        {step === 1 && <PostEventFormOne />}
        {step === 2 && <PostEventFormTwo />}
        {step === 3 && <PostEventFormThree />}
        {step === 4 && <PostEventFormFour />}
        {/* I can add more steps here in the future */}
      </div>

      <div className='flex max-w-4xl w-full mx-auto justify-end gap-2 items-end'>
        {step > 1 && (
          <Button onClick={handlePrevious} className='w-[10rem] mt-4'>
            Previous
          </Button>
        )}
        {step === 4 ? (
          <Button className='w-[10rem] mt-4'>Submit</Button>
        ) : (
          <Button onClick={handleNext} className='w-[10rem] mt-4'>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Page;

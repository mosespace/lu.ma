"use client";

import FooterBtns from "./footer_btns";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProgressTracker } from "../progress";
import { DateRangePicker } from "../date-picker";
import { useAppSelector } from "@/store/hooks/hooks";
import { Controller, useForm } from "react-hook-form";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";

interface FormSchema {
  dateRange: {
    from: string;
    to: string;
  };
}

export function PostEventFormFour() {
  const step = useSelector((state: any) => state.creatingEvent.step);

  const dispatch = useDispatch();
  const formData = useAppSelector((state: any) => state.creatingEvent.formData);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  const onSubmit = (data: FormSchema) => {
    // console.log(`Form 4 Data: ${JSON.stringify(data, null, 2)}`);
    dispatch(updateFormData(data));
    dispatch(setCurrentStep(step + 1));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='min-h-screen py-8 w-full flex flex-col items-center justify-center'
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='font-bold text-xl'>Description-Класс</h2>

        <p className='mb-4'>Шаг {step} из 4</p>
        <ProgressTracker />
      </div>
      <div className='flex bg-white max-w-4xl w-full mx-auto mt-4 shadow-lg rounded-lg p-12'>
        <div className='w-full relative'>
          <Controller
            name='dateRange'
            control={control}
            render={({ field }) => (
              <DateRangePicker
                onUpdate={(values) => {
                  setValue("dateRange", values);
                  field.onChange(values);
                }}
                initialDateFrom={formData.dateRange?.from || "2023-01-01"}
                initialDateTo={formData.dateRange?.to || "2023-12-31"}
                align='start'
                locale='en-GB'
                showCompare={false}
              />
            )}
          />
        </div>
      </div>

      <FooterBtns />
    </form>
  );
}

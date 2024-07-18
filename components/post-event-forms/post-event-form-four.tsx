"use client";

import FooterBtns from "./footer_btns";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProgressTracker } from "../progress";
import { DateRangePicker } from "../date-picker";
import { useAppSelector } from "@/store/hooks/hooks";
import { Controller, useForm } from "react-hook-form";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";
import MultipleImageUpload from "./multiple-image-upload";
import { useState } from "react";
import { Label } from "../ui/label";
import { getCurrentUser } from "@/lib/authProvider";
import { createEvent } from "@/actions/events";
import { useToast } from "../ui/use-toast";

interface FormSchema {
  dateRange: {
    range: {
      from: string;
      to: string;
    };
  };
  posters: string[];
  endDate: string;
  startDate: string;
}

export function PostEventFormFour() {
  const { toast } = useToast();

  const step = useSelector((state: any) => state.creatingEvent.step);

  const dispatch = useDispatch();
  const formData = useAppSelector((state: any) => state.creatingEvent.formData);

  const [posters, setPosters] = useState<any>(formData.posters || "");
  const [loading, setLoading] = useState<boolean>(false);

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

  async function onSubmit(data: FormSchema) {
    data.posters = posters;
    data.startDate = data.dateRange?.range.from as any;
    data.endDate = data.dateRange?.range.to as any;
    // console.log(data);

    dispatch(updateFormData(data as any));

    setLoading(true);
    try {
      // Retrieving the current user
      const user: any = await getCurrentUser();
      const userId = user.id;

      // Merging userId into formData
      const updatedFormData = { ...formData, userId };
      console.log(updatedFormData);

      // saving the data to the database
      const event: any = await createEvent({ data: updatedFormData });
      console.log("Event created: ", event);

      toast({
        title: "Event has been created successfully",
        variant: "default",
      });

      setLoading(false);

      dispatch(setCurrentStep(step + 1));
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast({
        title: "Event creation has failed...",
        variant: "destructive",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='min-h-screen py-8 w-full flex flex-col items-center justify-center'
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='font-bold text-xl'>Description-Класс</h2>

        <p className='mb-4'>Step {step} of 4</p>
        <ProgressTracker />
      </div>
      <div className='flex bg-white max-w-4xl w-full mx-auto mt-4 shadow-lg rounded-lg p-12'>
        <div className='w-full space-y-8 relative'>
          <div className='space-y-2'>
            <Label>Select Date Range For The Events</Label>

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

          <MultipleImageUpload
            label='Upload poster images (Optional)'
            images={posters}
            setImages={setPosters}
            className='w-full'
            endpoint='multipleImageUpload'
          />
        </div>
      </div>

      <FooterBtns loading={loading} />
    </form>
  );
}

"use client";

import { useState } from "react";
import { Label } from "../ui/label";
import { Tag, TagInput } from "emblor";
import FooterBtns from "./footer_btns";
import { useSelector, useDispatch } from "react-redux";
import { ProgressTracker } from "../progress";
import { useAppSelector } from "@/store/hooks/hooks";
import { Controller, useForm } from "react-hook-form";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";
import { CustomTextArea } from "../re-useables/custom-text-area";

interface FormSchema {
  description: string;
  tags: { id: string; text: string }[];
}

const defaultTags: { id: string; text: string }[] = [
  { id: "sports", text: "Sports" },
  { id: "programming", text: "Programming" },
  { id: "travel", text: "Travel" },
  { id: "music", text: "Music" },
  { id: "food", text: "Food" },
];

export function PostEventFormThree() {
  const [tags, setTags] = useState(defaultTags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const step = useSelector((state: any) => state.creatingEvent.step);
  const dispatch = useDispatch();
  const formData = useAppSelector((state: any) => state.creatingEvent.formData);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      ...formData,
      tags: formData.tags || defaultTags,
    },
  });

  async function onSubmit(data: FormSchema) {
    data.tags = tags;
    // console.log(`Form 3 Data: ${JSON.stringify(data, null, 2)}`);

    dispatch(updateFormData(data));
    dispatch(setCurrentStep(step + 1));
  }

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
        <div className='w-full gap-4 items-start flex'>
          <div className='w-full h-full space-y-8'>
            <div className='space-y-2'>
              <CustomTextArea
                row='15'
                label='Full Description'
                register={register}
                name='description'
                errors={errors}
                placeholder='Tell us more information about the event'
              />
            </div>

            <div>
              <Label>Add tags</Label>
              <div className='w-full relative my-4 flex flex-col space-y-2'>
                <div className='preview flex w-full justify-center items-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md'>
                  <Controller
                    name='tags'
                    control={control}
                    render={({ field }) => (
                      <TagInput
                        {...field}
                        placeholder='Enter a topic'
                        tags={tags}
                        className='max-w-[250px] bg-transparent'
                        setTags={(newTags: any) => {
                          setTags(newTags);
                          setValue("tags", newTags);
                        }}
                        activeTagIndex={activeTagIndex}
                        setActiveTagIndex={setActiveTagIndex}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterBtns />
    </form>
  );
}

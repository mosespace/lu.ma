"use client";

import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { TagInput } from "emblor";
import FooterBtns from "./footer_btns";
import { useSelector, useDispatch } from "react-redux";
import { ProgressTracker } from "../progress";
import { useAppSelector } from "@/store/hooks/hooks";
import { Controller, useForm } from "react-hook-form";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";
import { generateShortId } from "@/utils/generate-short-id";
import Editor from "../editor/advanced-editor";
import { JSONContent } from "novel";
import { defaultValue } from "@/app/default";

interface FormSchema {
  description: string;
  tags: { id: string; text: string }[];
}

const createDefaultTags = () => [
  { id: generateShortId(), text: "Sports" },
  { id: generateShortId(), text: "Travel" },
  { id: generateShortId(), text: "Party" },
];

export function PostEventFormThree() {
  const formData = useAppSelector((state: any) => state.creatingEvent.formData);
  const initialTags =
    formData.tags && formData.tags.length ? formData.tags : createDefaultTags();
  const [tags, setTags] = useState(initialTags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [content, setContent] = useState<JSONContent>(
    formData.description || defaultValue
  );

  const step = useSelector((state: any) => state.creatingEvent.step);
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      description: formData.description || defaultValue,
      tags: initialTags,
    },
  });

  useEffect(() => {
    if (formData.tags && formData.tags.length) {
      setTags(formData.tags);
      setValue("tags", formData.tags);
    }
  }, [formData, setValue]);

  async function onSubmit(data: FormSchema) {
    const tagsArray = tags.map((tag: any) => ({
      id: generateShortId(),
      text: tag.text,
    }));

    data.tags = tagsArray;
    data.description = content as any;

    // console.log(data);

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
              {/* <CustomTextArea
                row='15'
                label='Full Description'
                register={register}
                name='description'
                errors={errors}
                placeholder='Tell us more information about the event'
              /> */}

              <Editor initialValue={content} onChange={setContent} />
            </div>

            <div>
              <Label>Add tags</Label>
              <div className='w-full relative my-4 flex flex-col space-y-2'>
                <div className='preview flex w-full justify-center items-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md'>
                  <Controller
                    name='tags'
                    control={control}
                    defaultValue={initialTags} // Ensure the defaultValue is set for the Controller
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

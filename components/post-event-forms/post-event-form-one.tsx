"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "@/components/image-uploader";
import ShadSelectInput, { SelectOption } from "@/components/select-input";
import { FancyMultiSelect } from "@/components/fancy-multi-select";
import { generateSlug } from "@/utils/generate-slug";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";
import { ProgressTracker } from "../progress";
import FooterBtns from "./footer_btns";
import { Button } from "../ui/button";
import CustomText from "../re-useables/custom-text";
import { Label } from "../ui/label";

interface FormSchema {
  name: string;
  maxParticipants: string;
  slug: string;
  eventType: string;
  ticketType: string;
  photo: string;
}

const event_type = [
  {
    value: "online",
    label: "Online",
  },
  {
    value: "physical",
    label: "Physical",
  },
];

const ticket_type = [
  {
    value: "free",
    label: "Free",
  },
  {
    value: "paid",
    label: "Paid",
  },
];

const categories = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
];

export function PostEventFormOne() {
  const dispatch = useDispatch();
  const formData: any = useSelector(
    (state: any) => state.creatingEvent.formData
  );

  const [selectedCategory, setSelectedCategory] = useState<any[]>([
    categories[1],
  ]);
  const [selectedEventType, setSelectedEventType] =
    useState<SelectOption | null>(null);
  const [selectedTicketType, setSelectedTicketType] =
    useState<SelectOption | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const step = useSelector((state: any) => state.creatingEvent.step);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  useEffect(() => {
    if (formData?.eventType) {
      const eventType = event_type.find(
        (type) => type.value === formData.eventType
      );
      setSelectedEventType(eventType || null);
    }

    if (formData?.ticketType) {
      const ticketType = ticket_type.find(
        (type) => type.value === formData.ticketType
      );
      setSelectedTicketType(ticketType || null);
    }

    if (formData?.categories) {
      const selected_categories: any = categories.find(
        (category: any) => category.value === category.ticketType
      );
      setSelectedTicketType(selected_categories || null);
    }
  }, [formData]);

  async function onSubmit(data: FormSchema) {
    const slug = generateSlug(data.name as string);
    data.slug = slug;
    data.photo = imageUrl;
    data.eventType = selectedEventType?.value || "";
    data.ticketType = selectedTicketType?.value || "";

    dispatch(updateFormData(data));
    dispatch(setCurrentStep(step + 1));
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='min-h-screen py-8 w-full flex flex-col items-center justify-center'
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='font-bold text-xl'>Мастер-Класс</h2>
        <p className='mb-4'>Шаг {step} из 4</p>
        <ProgressTracker />
      </div>

      <div className='flex bg-white max-w-4xl w-full mx-auto mt-4 shadow-lg rounded-lg p-12'>
        <div className='w-full gap-8 items-start flex'>
          <div className='w-full space-y-8'>
            <CustomText
              register={register}
              errors={errors}
              name='name'
              type='text'
              label='Event Name'
              placeholder='Desishub Event 2024!'
            />

            <div className='flex flex-col gap-3'>
              <Label>Choose Categories</Label>
              <FancyMultiSelect
                options={categories}
                selectedOption={selectedCategory}
                setSelectedOption={setSelectedCategory}
              />
            </div>

            <CustomText
              register={register}
              errors={errors}
              name='maxParticipants'
              type='number'
              label='Max Participants'
              placeholder='01'
            />

            <div className='flex gap-3'>
              <ShadSelectInput
                label='Event Type'
                optionTitle='Choose Event Type'
                options={event_type}
                selectedOption={selectedEventType}
                setSelectedOption={setSelectedEventType}
                className='w-full'
              />
              <ShadSelectInput
                label='Select Ticket Type'
                optionTitle='Choose Ticket Type'
                options={ticket_type}
                selectedOption={selectedTicketType}
                setSelectedOption={setSelectedTicketType}
                className='w-full'
              />
            </div>
          </div>

          <div className='w-full'>
            <ImageUploader
              label='Upload Event Image'
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='eventImageUploader'
            />
          </div>
        </div>
      </div>

      <FooterBtns />
    </form>
  );
}

"use client";

import { Label } from "../ui/label";
import FooterBtns from "./footer_btns";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProgressTracker } from "../progress";
import CustomText from "../re-useables/custom-text";
import { generateSlug } from "@/utils/generate-slug";
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "@/components/image-uploader";
import { getAllCategories } from "@/actions/categories";
import { FancyMultiSelect } from "@/components/fancy-multi-select";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";
import ShadSelectInput from "@/components/select-input";

interface FormSchema {
  name: string;
  maxParticipants: string;
  slug: string;
  eventType: string;
  ticketType: string;
  photo: string;
  link?: string;
  categoryIds: string[]; // Ensure categories is an array of strings
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

export function PostEventFormOne() {
  const dispatch = useDispatch();
  const formData: any = useSelector(
    (state: any) => state.creatingEvent.formData
  );

  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any[]>([]);
  const [selectedEventType, setSelectedEventType] = useState<any>();
  const [selectedTicketType, setSelectedTicketType] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>("");

  const step = useSelector((state: any) => state.creatingEvent.step);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
      categoryIds: formData.categoryIds || [],
      eventType: formData?.ticketType,
    },
  });

  // console.log(formData?.eventType);
  useEffect(() => {
    async function fetchCategories() {
      const rawCategories = await getAllCategories();
      if (rawCategories) {
        const mappedCategories = rawCategories.map((category: any) => ({
          value: category.id,
          label: category.name,
        }));
        setCategories(mappedCategories);

        if (formData?.categoryIds) {
          const selected_categories = mappedCategories.filter((category: any) =>
            formData.categoryIds.includes(category.value)
          );
          setSelectedCategory(selected_categories);
        }
      }
    }

    if (formData?.eventType) {
      const selected_event_type = event_type.find(
        (type) => type.value === formData.eventType
      );
      setSelectedEventType(selected_event_type);
    }

    if (formData?.ticketType) {
      const ticketType = ticket_type.find(
        (type) => type.value === formData.ticketType
      );
      setSelectedTicketType(ticketType);
    }

    fetchCategories();
  }, [formData]);

  async function onSubmit(data: FormSchema) {
    const slug = generateSlug(data.name as string);
    data.slug = slug;
    data.photo = imageUrl;
    data.eventType = selectedEventType?.value || "";
    data.ticketType = selectedTicketType?.value || "";
    data.categoryIds = selectedCategory.map((category: any) => category.value);

    dispatch(updateFormData(data));
    dispatch(setCurrentStep(step + 1));

    console.log(data);
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

          <div className='flex space-y-9 justify-between flex-col w-full'>
            <ImageUploader
              label='Upload Event Image'
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='eventImageUploader'
            />
            <div className='flex flex-col gap-3'>
              {(selectedEventType?.value === "online" ||
                formData?.eventType === "online") && (
                <CustomText
                  register={register}
                  errors={errors}
                  name='link'
                  type='url'
                  label='Online Event Link'
                  placeholder='https://meet.google.com/meeting-id'
                />
              )}

              {(selectedTicketType?.value === "paid" ||
                formData?.ticketType === "paid") && (
                <CustomText
                  register={register}
                  errors={errors}
                  name='ticketPrice'
                  type='number'
                  label='Event Ticket Price'
                  placeholder='$150'
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterBtns />
    </form>
  );
}

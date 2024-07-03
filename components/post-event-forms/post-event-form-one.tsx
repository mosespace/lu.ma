"use client";

import { Label } from "../ui/label";
import FooterBtns from "./footer_btns";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProgressTracker } from "../progress";
import CustomText from "../re-useables/custom-text";

import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "@/components/image-uploader";
import { getAllCategories } from "@/actions/categories";
import { FancyMultiSelect } from "@/components/fancy-multi-select";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";
import ShadSelectInput from "@/components/select-input";
import { generateSlug } from "@/utils/generate-slug";

interface FormSchema {
  name: string;
  maxParticipants: string;
  slug: string;
  eventType: string;
  ticketType: string;
  photo: string;
  link?: string;
  ticketPrice?: string;
  categoryId: string;
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

  const initialEventType = formData?.eventType || "";
  const initialTicketType = formData?.ticketType || "";
  const initialCategoryId = formData?.categoryId || "";
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryId);
  const [selectedEventType, setSelectedEventType] = useState(initialEventType);
  const [selectedTicketType, setSelectedTicketType] =
    useState(initialTicketType);
  const [imageUrl, setImageUrl] = useState<string>("");

  const step = useSelector((state: any) => state.creatingEvent.step);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
      categoryId: formData.categoryId || [],
      eventType: formData?.eventType,
      ticketType: formData?.ticketType,
    },
  });

  useEffect(() => {
    async function fetchCategories() {
      const rawCategories = await getAllCategories();
      if (rawCategories) {
        const mappedCategories = rawCategories.map((category: any) => ({
          value: category.id,
          label: category.name,
        }));
        setCategories(mappedCategories);

        if (formData?.categoryId) {
          const selected_categories = mappedCategories.filter((category: any) =>
            formData.categoryId.includes(category.value)
          );
          setSelectedCategory(selected_categories);
        }
      }
    }

    fetchCategories();
  }, [formData.categoryId]);

  async function onSubmit(data: FormSchema) {
    const slug = generateSlug(data.name as string);
    data.slug = slug;
    data.photo = imageUrl;
    data.eventType = selectedEventType;
    data.ticketType = selectedTicketType;

    // adjusting these basing on conditions
    if (data.eventType === "physical") {
      data.link = "";
    } else {
      data.link;
    }

    if (data.ticketType === "free") {
      data.ticketPrice = "";
    } else {
      data.ticketPrice;
    }

    data.categoryId = selectedCategory;

    dispatch(updateFormData(data));
    dispatch(setCurrentStep(step + 1));

    // console.log(data);
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
              {/* <Label>Choose Category</Label> */}
              {/* <FancyMultiSelect
                options={categories}
                selectedOption={selectedCategory}
                setSelectedOption={setSelectedCategory}
              /> */}
              <ShadSelectInput
                name={"categoryId"}
                label={"Choose Category"}
                optionsArray={categories}
                register={register}
                selected={selectedCategory}
                setSelected={setSelectedCategory}
                className='w-full'
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
                optionsArray={event_type}
                register={register}
                name='eventType'
                selected={selectedEventType}
                setSelected={setSelectedEventType}
                className='w-full'
              />
              <ShadSelectInput
                label='Select Ticket Type'
                optionsArray={ticket_type}
                register={register}
                name='ticketType'
                selected={selectedTicketType}
                setSelected={setSelectedTicketType}
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
              {(selectedEventType === "physical" ||
                formData?.eventType === "physical") && (
                <CustomText
                  register={register}
                  errors={errors}
                  name='location'
                  type='location'
                  label='Physical Event Location'
                  placeholder='MOTIV Bugolobi'
                />
              )}
              {(selectedEventType === "online" ||
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

              {(selectedTicketType === "paid" ||
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

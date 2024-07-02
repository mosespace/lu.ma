"use client";

import Image from "next/image";
import { useState } from "react";
import { Label } from "../ui/label";
import FooterBtns from "./footer_btns";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PhoneInput } from "../phone-input";
import { ProgressTracker } from "../progress";
import CustomText from "../re-useables/custom-text";
import { setCurrentStep, updateFormData } from "@/store/slices/form-slice";

interface FormSchema {
  country: string;
  state: string;
  address1: string;
  address2: string;
  email: string;
  tel: string;
}

export function PostEventFormTwo() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const dispatch = useDispatch();
  const step = useSelector((state: any) => state.creatingEvent.step);
  // console.log(step);
  const formData = useSelector((state: any) => state.creatingEvent.formData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  function onSubmit(data: FormSchema) {
    data.tel = phoneNumber;

    // console.log(data);

    dispatch(updateFormData(data));

    dispatch(setCurrentStep(step + 1));
  }

  const handlePhoneChange = (value: any) => {
    setPhoneNumber(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='min-h-screen py-8 w-full flex flex-col items-center justify-center'
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='font-bold text-xl'>Location-Класс</h2>

        <p className='mb-4'>Шаг {step} из 4</p>
        <ProgressTracker />
      </div>

      <div className='flex bg-white max-w-4xl w-full mx-auto mt-4 shadow-lg rounded-lg p-12'>
        <div className='w-full gap-4 items-start flex'>
          <div className='w-full space-y-8'>
            <CustomText
              register={register}
              errors={errors}
              name='country'
              type='country'
              label='Country'
              placeholder='Uganda (UG)'
            />
            <CustomText
              register={register}
              errors={errors}
              name='state'
              type='text'
              label='State'
              placeholder='Kampala, Central'
            />
            <CustomText
              register={register}
              errors={errors}
              name='address1'
              type='address'
              label='Address One'
              placeholder='Lugogo 4th Street'
            />
            <CustomText
              register={register}
              errors={errors}
              name='address2'
              type='address'
              label='Address Two'
              placeholder='This field is optional'
            />
            <CustomText
              register={register}
              errors={errors}
              name='email'
              type='email'
              label='Email'
              placeholder='mosespace@gmail.com'
            />

            <div className='space-y-2'>
              <Label>Contact Details</Label>
              <PhoneInput onChange={handlePhoneChange} defaultCountry='UG' />
            </div>
          </div>

          <div className='w-full'>
            <Image
              width={1080}
              height={1080}
              alt='lu.ma'
              src={formData?.photo || "/side-img.svg"}
              className='object-cover rounded-xl w-full h-full'
            />
          </div>
        </div>
      </div>
      <FooterBtns />
    </form>
  );
}

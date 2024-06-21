"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUploader from "@/components/image-uploader";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "../phone-input";
import Image from "next/image";

const FormSchema = z.object({
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  address1: z.string().min(2, {
    message: "Address One must be at least 2 characters.",
  }),
  address2: z.string().optional(),
  email: z
    .string()
    .min(2, {
      message: "Email is required",
    })
    .email({
      message: "Not a valid email",
    }),
  contact: z.string().min(1, {
    message: "Contact must be at least 1 characters.",
  }),
});

export function PostEventFormTwo() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [imageUrl, setImageUrl] = useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      country: "",
      state: "",
      address1: "",
      address2: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const handlePhoneChange = (value: any) => {
    setPhoneNumber(value);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full gap-4 items-start flex'
      >
        <div className='w-full space-y-8'>
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder='Uganda (UG)' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='state'
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input
                    type='string'
                    placeholder='Kampala, Central'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='address1'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address One</FormLabel>
                <FormControl>
                  <Input
                    type='string'
                    placeholder='Lugogo 4th Street'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='address2'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Two (Optional)</FormLabel>
                <FormControl>
                  <Input
                    type='string'
                    placeholder='this field is optional'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='mosespace@gmail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <PhoneInput onChange={handlePhoneChange} defaultCountry='UG' />
        </div>

        <div className='w-full'>
          <Image
            width={1080}
            height={1080}
            alt='lu.ma'
            src='/side-img.svg'
            className='object-cover rounded-xl w-full h-full'
          />
        </div>
      </form>
    </Form>
  );
}

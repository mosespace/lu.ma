"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUploader from "@/components/image-uploader";
import ShadSelectInput from "@/components/select-input";
import { FancyMultiSelect } from "@/components/fancy-multi-select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { generateSlug } from "@/utils/generate-slug";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  maxParticipants: z.number().min(2, {
    message: "Max Participants must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "Max Participants must be at least 2 characters.",
  }),
});

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
  const [selectedOption, setSelectedOption] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      maxParticipants: 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    data.slug = generateSlug(data.name);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full gap-8 items-start flex'
      >
        <div className='w-full space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder='Desishub Event 2024!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-col gap-3'>
            <FormLabel>Choose Categories</FormLabel>
            <FancyMultiSelect />
          </div>

          <FormField
            control={form.control}
            name='maxParticipants'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Participants</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='01 (Participants)'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex gap-3'>
            {/* <FormLabel>Event Type</FormLabel> */}
            <ShadSelectInput
              label='Event Type'
              optionTitle='Choose Event Type'
              options={event_type}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              className='w-full'
            />
            <ShadSelectInput
              label='Select Ticket Type'
              optionTitle='Choose Ticket Type'
              options={ticket_type}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
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
      </form>
    </Form>
  );
}

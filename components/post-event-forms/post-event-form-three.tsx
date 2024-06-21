"use client";

import { z } from "zod";
import { useState } from "react";
import { Label } from "../ui/label";
import { Tag, TagInput } from "emblor";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const FormSchema = z.object({
  description: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  tags: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
});

const defaultTags: Tag[] = [
  { id: "sports", text: "Sports" },
  { id: "programming", text: "Programming" },
  { id: "travel", text: "Travel" },
  { id: "music", text: "Music" },
  { id: "food", text: "Food" },
];

export function PostEventFormThree() {
  const [tags, setTags] = useState<Tag[]>(defaultTags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const { control, handleSubmit, setValue } = useForm<
    z.infer<typeof FormSchema>
  >({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full gap-4 items-start flex'
    >
      <div className='w-full h-full space-y-8'>
        <div className='space-y-2'>
          <Label>Full Description</Label>
          <Controller
            name='description'
            control={control}
            render={({ field }: { field: any }) => (
              <Textarea
                rows={15}
                placeholder='Tell us a more information about event'
                {...field}
              />
            )}
          />
        </div>

        <div>
          <Label>Add tags</Label>
          <div className='w-full relative my-4 flex flex-col space-y-2'>
            <div className='preview flex w-full justify-center items-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md'>
              <Controller
                name='tags'
                control={control}
                render={({ field }: { field: any }) => (
                  <TagInput
                    {...field}
                    placeholder='Enter a topic'
                    tags={tags}
                    className='max-w-[250px] bg-transparent'
                    setTags={(newTags) => {
                      setTags(newTags);
                      setValue("tags", newTags as [Tag, ...Tag[]]);
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
    </form>
  );
}

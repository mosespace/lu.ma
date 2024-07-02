"use client";
import React from "react";
import Image from "next/image";

import { UploadDropzone } from "@/utils/uploadthing";
import { Eye, Pencil } from "lucide-react";
import { Button } from "../ui/button";

export default function MultipleImageUpload({
  label,
  images = [],
  setImages,
  className = "col-span-full",
  endpoint,
}: {
  label: string;
  images: string[];
  setImages: any;
  className: string;
  endpoint: string;
}) {
  const changeImage = (index: any) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className={className}>
      <div className='flex flex-col items-start justify-between mb-4'>
        <label
          htmlFor='course-image'
          className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
        >
          {label}
        </label>

        {images.length > 0 && (
          <div className='flex flex-col mb-4 sm:flex-row md:items-center sm:gap-8 gap-4 pt-4'>
            <Button
              className='space-x-3 flex gap-3'
              onClick={() => setImages([])}
            >
              <Eye className='size-4' /> Change All Images
            </Button>
            <span className=''>
              You can also click on the image to make changes
            </span>
          </div>
        )}
        <div className='w-full'>
          {images.length > 0 && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  className='relative cursor-pointer'
                  onClick={() => changeImage(index)}
                >
                  <Button
                    className='my-3 flex gap-2'
                    variant='outline'
                    onClick={() => changeImage(index)}
                  >
                    <Pencil className='size-4' /> Remove Image
                  </Button>
                  <Image
                    src={imageUrl}
                    alt={`Product image ${index + 1}`}
                    width={300}
                    height={200}
                    className='object-cover w-full rounded-lg max-h-52'
                  />
                </div>
              ))}
            </div>
          )}
          <UploadDropzone
            className='mt-4 ut-button:!cursor-pointer ut-button:bg-primary ut-label:text-primary ut-label:hover:text-primary/50 ut-button:ut-readying:bg-orangeB/50 ut-button:ut-uploading:bg-orangeB ut-uploading:cursor-not-allowed custom-class'
            endpoint={endpoint as any}
            onClientUploadComplete={(res) => {
              const newImages = res.map((item) => item.url);
              setImages([...images, ...newImages]);
            }}
            onUploadError={(error) => {
              console.log(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}

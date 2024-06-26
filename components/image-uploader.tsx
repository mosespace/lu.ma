"use client";

import React from "react";
import Image from "next/image";
import { Pencil } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { UploadDropzone } from "@/utils/uploadthing";

export default function ImageUploader({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "",
}: {
  label: string;
  imageUrl: string;
  setImageUrl: (url: string) => void; // Corrected prop type
  className?: string;
  endpoint: any;
}) {
  return (
    <div className={className}>
      <div className='mb-4 flex items-center justify-between gap-3'>
        <Label htmlFor={label} className='text-sm'>
          {label}
        </Label>

        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type='button'
            className='flex items-center space-x-2 rounded-md bg-orangeB px-4 py-2 text-slate-50 shadow'
          >
            <Pencil className='h-4 w-4' />
            <span>Change</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={label}
          width={1080}
          height={1080}
          className='h-64 w-full object-contain'
        />
      ) : (
        <UploadDropzone
          className='mt-4 ut-button:!cursor-pointer ut-button:bg-primary ut-label:text-primary ut-label:hover:text-primary/50 ut-button:ut-readying:bg-orangeB/50'
          endpoint={endpoint}
          onClientUploadComplete={(res: any) => {
            setImageUrl(res[0].url);
            // Do something with the response
            toast({ title: "Image Upload completed successfully" });
            // console.log("Files: ", res);
            // console.log("Upload Completed");
          }}
          onUploadError={(error: any) => {
            toast({ title: "Image Upload Failed, Try Again" });
            // Do something with the error.
            console.log(`ERROR! ${error.message}`, error);
          }}
        />
      )}
    </div>
  );
}

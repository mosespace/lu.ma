import React from "react";
import Link from "next/link";
import { EventCardProps } from "@/types/types";
import { Armchair, Eye } from "lucide-react";
import { Button } from "../ui/button";

export default function DashboardEventCard({ image, title, id }: any) {
  return (
    <Link href={`/dashboard/events/${id}`} className='flex flex-col'>
      <div className='max-w-xs relative rounded-lg overflow-hidden shadow-lg my-2'>
        <div className='absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900'></div>
        <img className='w-full' src={image} alt={title} />
        <div className='absolute top-0 right-0 mx-5 mt-2 flex justify-between items-center'>
          <div className='text-[#FE5A00] font-regular flex items-center gap-2 justify-end'>
            <Eye className='size-4' />
            <span className='text-base font-black leading-0'>254</span>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 mx-5 mb-2 flex justify-between items-center'>
          <div className='text-white font-regular flex items-center gap-1 justify-end'>
            <Armchair className='size-4 text-primary' />
            <span className='text-base font-semibold leading-0'>
              sits <span className='text/lg'>300</span>
            </span>
          </div>
        </div>
      </div>

      <div className='px-1 py-4'>
        <p className='font-bold text-base  line-clamp-2'>{title}</p>
        <Button className='w-full mt-3'>View Attendees</Button>
      </div>
    </Link>
  );
}

import React from "react";
import Link from "next/link";
import { EventCardProps } from "@/types/types";
import { Armchair, Eye, LocateOffIcon, Timer } from "lucide-react";

export default function EventCard({
  image,
  title,
  price,
  category,
  when,
  location,
  slug,
}: EventCardProps) {
  return (
    <Link href={`/event/${slug}`} className='flex flex-col'>
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
            <Armchair className='size-4' />
            <span className='text-base font-semibold leading-0'>
              oT <span className='text/lg'>300</span>
            </span>
          </div>
        </div>
      </div>

      <div className='px-1 py-4'>
        <p className='font-bold text-base'>{title}</p>
        <div className='text-sm mt-2 text-gray-700 flex items-center gap-1'>
          <LocateOffIcon className='size-3' />
          {location}
        </div>

        <span className='text-sm mt-2 font-semibold flex items-center gap-2 text-gray-700 mr-2 mb-2'>
          <Timer className='size-3' />
          {when}
        </span>
      </div>
      {/* <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {category}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {when}
        </span>
      </div> */}
    </Link>
  );
}

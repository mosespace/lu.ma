import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";
import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

import { buttonVariants } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import EventCard from "@/components/event-card";
import { EventCardProps, ICategory, IService } from "@/types/types";
import {
  BetweenHorizontalEnd,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  SlidersHorizontal,
} from "lucide-react";

const events: EventCardProps[] = [
  {
    id: 1,
    price: "от 2900 ₽",
    title: "Мастер-класс по созданию помады или блеска для губ",
    slug: "Мастер-класс-по-созданию-помады-или-блеска-для-губ",
    location: "Kampala Uganda",
    description: "",
    image:
      "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500", // Replace with your actual image path
    category: "Лаборатория по созданию косметики Makeup Kitchen",
    when: "ежедневно",
  },
  {
    id: 2,
    price: "от 5450 ₽",
    title:
      "Омолаживающий релакс: балийский ойл-массаж и скрабирование в спа-салоне",
    slug: "Омолаживающий-релакс:-балийский-ойл-массаж-и-скрабирование-в-спа-салоне",
    location: "Kireka Banda Road Uganda",
    description: "",
    image:
      "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
    category: "Спа-салон «КРАСКИ»",
    when: "ежедневно",
  },
  {
    id: 3,
    price: "от 1000 ₽",
    title: "Вечеринка Chicago party в караоке-баре",
    slug: "Вечеринка-Chicago-party-в-караоке-баре",
    location: "Bweyogerere and Ntinda Uganda",
    description: "",
    image:
      "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
    category: "Караоке-бар «Piterparty»",
    when: "ежедневно",
  },
  {
    id: 4,
    price: "от 12990 ₽",
    title: "Ночной полет на самолете над Санкт-Петербургом",
    slug: "Ночной-полет-на-самолете-над-Санкт-Петербургом",
    location: "Kanjjansi Kampala Uganda",
    description: "",
    image:
      "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
    category: "Аэроклуб «VizitAir»",
    when: "ежедневно",
  },
];

const categories: ICategory[] = [
  {
    id: "1",
    title: "Куда сходить",
    color: "#FE5A00",
    image: "/trumpet.png",
  },
  {
    id: "2",
    title: "Куда сходить",
    color: "#FF4C45",
    image: "/dj.png",
  },
  {
    id: "3",
    title: "Куда сходить",
    color: "#784A9E",
    image: "/image-frame.png",
  },
  {
    id: "4",
    title: "Куда сходить",
    color: "#FEC302",
    image: "/dancer.png",
  },
  {
    id: "4",
    title: "Куда сходить",
    color: "#FF4C45",
    image: "/student.png",
  },
  {
    id: "4",
    title: "Куда сходить",
    color: "#323232",
    image: "/frog.png",
  },
];

const services: IService[] = [
  {
    id: "1",
    image: <FileCheck2 className='size-24' />,
    title: "Петербурге",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Modi delectus sapiente inventore pariatur. Modi delectus sapiente inventore pariatur",
  },
  {
    id: "2",
    image: <BetweenHorizontalEnd className='size-24' />,
    title: "Петербурге",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi delectus sapiente inventore pariatur Modi delectus sapiente inventore pariatur",
  },
  {
    id: "3",
    image: <SlidersHorizontal className='size-24' />,
    title: "Петербурге",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas. Modi delectus sapiente inventore pariatur",
  },
];

export default function IndexPage() {
  return (
    <main className=''>
      <div className='min-h-1/2 bg-blackB w-full flex items-center justify-center'>
        <div className='px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl'>
          <div className='grid items-center grid-cols-1 gap-4 list-none lg:grid-cols-2 lg:gap-24'>
            <div>
              <span className='text-xs font-bold tracking-wide text-[#FE5A00] uppercase'>
                events 24/7
              </span>
              <Balancer className='mt-8 font-black text-5xl text-white tracking-tight text-White text-balances'>
                CULTURAL, TOURIST, ENTERTAINMENT EVENTS AND PLACES
              </Balancer>
              <Balancer className='mt-4 text-white font-light text-medium'>
                CEvents made easy! No hassles. Experience Online events with us
                and tune into online events webinars lessons and more From your
                living room.
              </Balancer>

              {/* you can add buttons here */}
            </div>
            <div className='p-2 border bg-gray-50 rounded-3xl'>
              <div className='h-full overflow-hidden bg-white border shadow-lg rounded-3xl'>
                <img
                  alt='Lexingtøn thumbnail'
                  className='relative w-full rounded-2xl drop-shadow-2xl'
                  src='https://windstatic.com/images/appify/phone.png'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl pb-24 mx-auto'>
        {/* main events */}
        <div className='container mx-auto'>
          <div className='flex justify-between mb-1 mt-8'>
            <div className='text-center py-4'>
              <h1 className='text-3xl font-bold'>
                Куда сходить в Санкт-Петербурге
              </h1>
            </div>
            <div className='flex items-center gap-2'>
              <button>
                <ChevronLeft className='size-8 text-gray-700 ' />
              </button>
              <button>
                <ChevronRight className='size-8' />
              </button>
            </div>
          </div>
          <div className='grid grid-cols-4 justify-center gap-2'>
            {events.map((event: EventCardProps) => (
              <EventCard
                key={event.id}
                id={event.id}
                image={event.image}
                title={event.title}
                price={event.price}
                category={event.category}
                location={event.location}
                when={event.when}
                slug={event.slug}
              />
            ))}
          </div>
        </div>

        <div className='container mx-auto mt-12'>
          <div className='bg-orangeB relative py-12 flex justify-between w-full items-center px-8 rounded-lg'>
            <div className='flex-col flex'>
              <Balancer>
                <h1 className='text-white text-2xl font-bold'>
                  Куда сходить в Санкт-Петербурге{" "}
                  <span className='text-2xl font-bold'>Куда сходить</span>
                </h1>
              </Balancer>
              <Balancer>
                <p className='mt-2 text-sm text-black'>
                  Куда сходить в Санкт-ПетербургеКуда сходить в
                  Санкт-ПетербургеКуда сходить в Санкт-Петербурге
                </p>
              </Balancer>
            </div>
            <div className='hidden rounded-full lg:block lg:absolute -bottom-[2.5rem] right-0'>
              <img src='/map.png' alt='' className='mt-4 h-[16.5rem] z-10' />
            </div>
            <div className='block lg:hidden'>
              <img
                src='/map.png'
                alt=''
                className='mt-4 h-[13rem] relative z-10'
              />
            </div>
          </div>
        </div>

        {/* In your location */}
        <div className='container mx-auto mt-12'>
          <div className='flex justify-between mb-1 mt-8'>
            <div className='text-center py-4'>
              <h1 className='text-3xl font-bold'>
                Куда сходить в Санкт-Петербурге
              </h1>
            </div>
            <div className='flex items-center gap-2'>
              <button>
                <ChevronLeft className='size-8 text-gray-700 ' />
              </button>
              <button>
                <ChevronRight className='size-8' />
              </button>
            </div>
          </div>
          <div className='grid grid-cols-4 justify-center gap-2'>
            {events.map((event: EventCardProps) => (
              <EventCard
                key={event.id}
                id={event.id}
                image={event.image}
                title={event.title}
                price={event.price}
                category={event.category}
                location={event.location}
                when={event.when}
                slug={event.slug}
              />
            ))}
          </div>
        </div>

        <div className='container mx-auto'>
          <div className='flex justify-between mb-1 mt-8'>
            <div className='text-left py-4'>
              <h1 className='text-3xl font-bold'>Санкт-Петербурге</h1>
            </div>
          </div>
          <div className='grid grid-cols-2 justify-center gap-2'>
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <div
                    style={{ backgroundColor: category.color }}
                    className={`bg-backB flex justify-between items-start relative rounded-md p-4 `}
                  >
                    <h3 className='text-lg font-bold text-white'>
                      {category.title}
                    </h3>

                    <img
                      src={category.image}
                      alt={category.title}
                      className='w-fulls cover-contain mr-8 h-[5rem]'
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button className='text-center mt-8 w-full font-bold justify-center flex items-center underline  decoration-dashed'>
            <span className='underline decoration-dashed'>Eрбубурге</span>
            <ChevronDown className='size-5 underline decoration-dashed' />
          </button>
        </div>

        <div className='container mx-auto mt-12'>
          <div className='grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8'>
            <div className='bg-blackB relative flex flex-col w-full items-center justify-center px-8 py-4 rounded-lg'>
              <Balancer>
                <h1 className='text-orangeB text-2xl text-center font-bold'>
                  Куда сходить в Санкт-Петербурге{" "}
                  <span className='text-white text-center text-2xl font-bold'>
                    Куда сходить
                  </span>
                </h1>
              </Balancer>
              <Balancer>
                <p className='mt-2 text-sm text-center text-[#c4c4c4]'>
                  Куда сходить в Санкт-ПетербургеКуда сходить в
                  Санкт-ПетербургеКуда сходить в Санкт-Петербурге
                </p>
              </Balancer>
              <div className='rounded-full absolute bottom-4 bg-[#FEC302] p-24'></div>
              <img
                src='/mask.png'
                alt=''
                className='mt-4 h-[13rem] relative z-10'
              />
            </div>
            <div className='bg-blackB relative flex flex-col w-full items-center justify-center px-8 py-4 rounded-lg'>
              <Balancer>
                <h1 className='text-orangeB text-2xl text-center font-bold'>
                  Куда сходить в Санкт-Петербурге{" "}
                  <span className='text-white text-center text-2xl font-bold'>
                    Куда сходить
                  </span>
                </h1>
              </Balancer>
              <Balancer>
                <p className='mt-2 text-sm text-center text-[#c4c4c4]'>
                  Куда сходить в Санкт-ПетербургеКуда сходить в
                  Санкт-ПетербургеКуда сходить в Санкт-Петербурге
                </p>
              </Balancer>
              <div className='rounded-full absolute bottom-4 bg-[#FF4C45] p-24'></div>
              <img src='/mic.png' alt='' className='mt-4 relative z-10' />
            </div>
            <div className='bg-blackB relative flex flex-col w-full items-center justify-center px-8 py-4 rounded-lg'>
              <Balancer>
                <h1 className='text-orangeB text-2xl text-center font-bold'>
                  Куда сходить в Санкт-Петербурге{" "}
                  <span className='text-white text-center text-2xl font-bold'>
                    Куда сходить
                  </span>
                </h1>
              </Balancer>
              <Balancer>
                <p className='mt-2 text-sm text-center text-[#c4c4c4]'>
                  Куда сходить в Санкт-ПетербургеКуда сходить в
                  Санкт-ПетербургеКуда сходить в Санкт-Петербурге
                </p>
              </Balancer>
              <div className='rounded-full absolute bottom-4 bg-[#FEC302] p-24'></div>
              <img
                src='/party-location.png'
                alt=''
                className='mt-4 h-[13rem] relative z-10'
              />
            </div>
          </div>
        </div>

        {/* popular-events */}
        <div className='container mx-auto mt-12'>
          <div className='flex justify-between mb-1 mt-8'>
            <div className='text-center py-4'>
              <h1 className='text-3xl font-bold'>
                Куда сходить в Санкт-Петербурге
              </h1>
            </div>
            <div className='flex items-center gap-2'>
              <button>
                <ChevronLeft className='size-8 text-gray-700 ' />
              </button>
              <button>
                <ChevronRight className='size-8' />
              </button>
            </div>
          </div>
          <div className='grid grid-cols-4 justify-center gap-2'>
            {events.map((event: EventCardProps) => (
              <EventCard
                key={event.id}
                id={event.id}
                image={event.image}
                title={event.title}
                price={event.price}
                category={event.category}
                location={event.location}
                when={event.when}
                slug={event.slug}
              />
            ))}
          </div>
        </div>

        {/* services-card */}
        <div className='container mx-auto mt-12'>
          <div className='flex justify-between mb-12 mt-8'>
            <div className='text-center py-4'>
              <h1 className='text-3xl font-bold'>
                Куда сходить в Санкт-Петербурге
              </h1>
            </div>
          </div>
          <div className='grid grid-cols-3 space-y-8 justify-center gap-4'>
            {services.map((service) => {
              return (
                <div key={service.id} className='card'>
                  <div className='content'>
                    {service.image}
                    <h2 className='font-bold text-2xl text-white'>
                      {service.title}
                    </h2>
                    <p className='para line-clamp-4'>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

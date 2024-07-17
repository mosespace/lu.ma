import EventCard from "@/components/event-card";
import Map from "@/components/map";
import { Button } from "@/components/ui/button";
import { EventCardProps } from "@/types/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Balancer from "react-wrap-balancer";

export default function page({ params: { slug } }: { params: any }) {
  const decodedSlug = decodeURIComponent(slug);
  // console.log(decodedSlug);

  const events: EventCardProps[] = [
    {
      id: 1,
      price: "от 2900 ₽",
      title: "Мастер-класс по созданию помады",
      slug: "Мастер-класс-по-созданию-помады",
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
      title: "Омолаживающий релакс: балийский ойл",
      slug: "Омолаживающий-релакс:-балийский-ойл",
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
      title: "Ночной полет на самолете над",
      slug: "Ночной-полет-на-самолете-над",
      location: "Kanjjansi Kampala Uganda",
      description: "",
      image:
        "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
      category: "Аэроклуб «VizitAir»",
      when: "ежедневно",
    },
  ];

  const favorite: EventCardProps[] = [
    {
      id: 1,
      price: "от 2900 ₽",
      title: "Мастер-класс по созданию помады",
      slug: "Мастер-класс-по-созданию-помады",
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
      title: "Омолаживающий релакс: балийский ойл",
      slug: "Омолаживающий-релакс:-балийский-ойл",
      location: "Kireka Banda Road Uganda",
      description: "",
      image:
        "https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
      category: "Спа-салон «КРАСКИ»",
      when: "ежедневно",
    },
  ];

  return (
    <div className=''>
      <div className='max-w-7xl flex-col mx-auto min-h-screen w-full flex items-centers justify-centers px-4 md:px-8'>
        <div className='grid gap-2 mt-8 lg:mx-auto lg:grid-cols-3 h-[30rem]'>
          <div className='relative h-full p-2 overflow-hidden border rounded-3xl lg:col-span-2'>
            <img
              src='/side-img.svg'
              className='object-cover w-full h-full border shadow-2xl rounded-2xl'
            />
          </div>
          <div className='h-full flex flex-col gap-4 p-2 overflow-hidden border rounded-3xl'>
            <img
              src='/hero-img.jpg'
              className='object-cover h-full border shadow-2xl rounded-2xl w-full'
            />
            <div className='px-8 pb-2'>
              <Button className='w-full rounded-lg'>Attend</Button>
            </div>
          </div>
        </div>
        <div className='flex items-center px-4 py-2'>
          <Balancer className='font-bold text-2xl max-w-[55rem]'>
            Куда сходить в Санкт-ПетербургеКуда сходить в Санкт-Петербурге Куда
            сходить.
          </Balancer>
        </div>
        <div className='flex flex-col px-4 py-8 max-w-4xl'>
          <h2 className='text-primary font-bold text-lg'>Title</h2>

          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in
            voluptatem sunt eos, vel deserunt nesciunt repellat quia delectus
            vitae repudiandae enim corporis odit mollitia saepe tempore
            repellendus, molestias dignissimos? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptates alias, perspiciatis
            suscipit provident eaque impedit magnam magni perferendis hic autem!
            Explicabo, in enim temporibus nesciunt minima, neque sequi officia
            quos alias ducimus porro, velit asperiores esse commodi blanditiis
            rerum aliquid eveniet dignissimos rem a magni. Laudantium voluptas
            deserunt qui modi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Alias aut maiores ab voluptates dolorum velit
            animi repellat eveniet, aspernatur temporibus quod, dolorem
            quibusdam esse obcaecati quasi tempora quia eaque nihil. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aperiam in voluptatem
            sunt eos, vel deserunt nesciunt repellat quia delectus vitae
            <br />
            <br />
            repudiandae enim corporis odit mollitia saepe tempore repellendus,
            molestias dignissimos? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates alias, perspiciatis suscipit provident
            eaque impedit magnam magni perferendis hic autem! Explicabo, in enim
            temporibus nesciunt minima, neque sequi officia quos alias ducimus
            porro, velit asperiores esse commodi blanditiis rerum aliquid
            eveniet dignissimos rem a magni. Laudantium voluptas deserunt qui
            modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            aut maiores ab voluptates dolorum velit animi repellat eveniet,
            aspernatur temporibus quod, dolorem quibusdam esse obcaecati quasi
            <br />
            <br />
            tempora quia eaque nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aperiam in voluptatem sunt eos, vel deserunt
            nesciunt repellat quia delectus vitae repudiandae enim corporis odit
            mollitia saepe tempore repellendus, molestias dignissimos? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptates alias,
            perspiciatis suscipit provident eaque impedit magnam magni
            perferendis hic autem! Explicabo, in enim temporibus nesciunt
            minima, neque sequi officia quos alias ducimus porro, velit
            asperiores esse commodi blanditiis rerum aliquid eveniet dignissimos
            rem a magni. Laudantium voluptas deserunt qui modi! Lorem ipsum{" "}
            <br />
            <br />
            dolor sit amet consectetur adipisicing elit. Alias aut maiores ab
            voluptates dolorum velit animi repellat eveniet, aspernatur
            temporibus quod, dolorem quibusdam esse obcaecati quasi tempora quia
            eaque nihil. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            numquam? Cumque architecto doloremque ratione quia enim at adipisci
            eveniet facilis, nostrum quasi, beatae recusandae doloribus
            excepturi, assumenda sunt distinctio perferendis!
          </p>

          <div className='my-8'>
            <Map />
          </div>

          {/* popular-events */}
          <div className='containers mx-autos mt-12'>
            <div className='flex justify-between mb-1 mt-8'>
              <div className='text-center py-4'>
                <h1 className='text-3xl font-bold'>Куда сходить</h1>
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
            <div className='grid gird-cols-1 md:grid-cols-4 justify-center gap-2'>
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

          {/* favourites-events */}
          <div className='containers mx-autos mt-12'>
            <div className='flex justify-between mb-1 mt-8'>
              <div className='text-center py-4'>
                <h1 className='text-3xl font-bold'>Куда сходить</h1>
              </div>
              {/* <div className='flex items-center gap-2'>
                <button>
                  <ChevronLeft className='size-8 text-gray-700 ' />
                </button>
                <button>
                  <ChevronRight className='size-8' />
                </button>
              </div> */}
            </div>
            <div className='grid gird-cols-1 md:grid-cols-4 justify-center gap-2'>
              {favorite.map((event: EventCardProps) => (
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
        </div>
      </div>
    </div>
  );
}

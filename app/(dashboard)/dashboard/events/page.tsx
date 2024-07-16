import { Card, CardContent } from "@/components/ui/card";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";
import Link from "next/link";
import { Plus } from "lucide-react";
import { EventCardProps } from "@/types/types";
import { Heading } from "@/components/heading";
import DashboardEventCard from "@/components/dashboard/dashboard-event-card";
import { getAllEvents } from "@/actions/events";

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

export default async function DashboardPage() {
  const events = await getAllEvents();
  // console.log(events);

  return (
    <ContentLayout title='Dashboard'>
      <div className='flex items-center justify-between'>
        <DashboardBreadcrumb />

        <Link
          href='/dashboard/events/new'
          className='text-xs flex bg-primary text-white items-center px-4 py-2 rounded-md md:text-sm'
        >
          <Plus className='mr-2 h-4 w-4' /> Add New
        </Link>
      </div>
      <Card className='rounded-lg border-none mt-6'>
        <CardContent className='p-6'>
          <div className='flex flex-col justify-center space-y-4 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]'>
            <Heading
              title={`All Your Events (${events?.length})`}
              description='Manage events. click on the last three dots to either make an update on a user or delete a user.'
            />
            <div className='grid grid-cols-4 justify-center gap-2'>
              {events?.map((event: any) => (
                <DashboardEventCard
                  key={event.id}
                  id={event.id}
                  image={event.image}
                  title={event.title}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

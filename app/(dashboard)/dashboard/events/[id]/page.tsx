import { Card, CardContent } from "@/components/ui/card";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import Map from "@/components/map";
import { getEventBySlug } from "@/actions/events";
import parse from "html-react-parser";

export default async function DashboardPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEventBySlug({ id });
  // console.log(event);

  const description: any = JSON.stringify(event?.content);
  return (
    <ContentLayout title='Dashboard'>
      <div className='flex items-center justify-between'>
        <DashboardBreadcrumb />

        <Link
          href='/dashboard/users/new'
          className='text-xs flex bg-primary text-white items-center px-4 py-2 rounded-md md:text-sm'
        >
          <Plus className='mr-2 h-4 w-4' /> Update
        </Link>
      </div>
      <Card className='rounded-lg border-none mt-6'>
        <CardContent className='p-6'>
          <div className='flex flex-col justify-center space-y-4 min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]'>
            <Heading
              title={`Detailed View`}
              description='Manage this event by clicking on the link to view more'
            />

            <>
              <div className='grid gap-2 mt-8 lg:mx-auto lg:grid-cols-3 h-[30rem]'>
                <div className='relative h-full p-2 overflow-hidden border rounded-3xl lg:col-span-2'>
                  <img
                    src={event?.posters[0]}
                    className='object-cover w-full h-full border shadow-2xl rounded-2xl'
                  />
                </div>
                <div className='h-full flex flex-col gap-4 p-2 overflow-hidden border rounded-3xl'>
                  <img
                    src={event?.posters[1]}
                    className='object-cover h-full border shadow-2xl rounded-2xl w-full'
                  />
                  <div className='px-8 pb-2'>
                    <Button className='w-full rounded-lg'>Attend</Button>
                  </div>
                </div>
              </div>
              <div className='flex items-center px-4 py-2'>
                <Balancer className='font-bold text-2xl max-w-[55rem]'>
                  {event?.title}
                </Balancer>
              </div>

              <div className='flex flex-col px-4 py-8 max-w-4xl'>
                <h2 className='text-primary font-bold text-lg'>Ben</h2>
                <article className='prose lg:prose-xl'>
                  {parse(`${description}`)}
                </article>

                <div className='my-8'>
                  <Map />
                </div>
              </div>
            </>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

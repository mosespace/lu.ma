"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";
import PostEvent from "@/app/post-event/page";

export default function DashboardPage() {
  return (
    <ContentLayout title='Dashboard'>
      <DashboardBreadcrumb />
      <Card className='rounded-lg border-none mt-6'>
        <CardContent className='p-6'>
          <div className='flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]'>
            <PostEvent />
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

import { users } from "@/constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { UserClient } from "@/components/tables/user-tables/client";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default function DashboardPage() {
  return (
    <ContentLayout title='Dashboard'>
      <DashboardBreadcrumb />
      <Card className='rounded-lg border-none mt-6'>
        <CardContent className='p-6 space-y-4'>
          <UserClient data={users} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

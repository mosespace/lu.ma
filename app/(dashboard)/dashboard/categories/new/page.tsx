import { Card, CardContent } from "@/components/ui/card";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { CategoryForm } from "@/components/forms/category-form";
import { getCurrentUser } from "@/lib/authProvider";

export default async function DashboardPage() {
  const user: any = await getCurrentUser();

  const userId = user?.id;
  return (
    <ContentLayout title='Dashboard'>
      <DashboardBreadcrumb />
      <Card className='rounded-lg border-none mt-6'>
        <CardContent className='p-6'>
          <div className='px-8 py-12'>
            <CategoryForm userId={userId} />
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

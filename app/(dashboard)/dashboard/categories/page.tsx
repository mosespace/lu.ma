import { Card, CardContent } from "@/components/ui/card";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { CategoryClient } from "@/components/tables/category-tables/client";
import { getAllCategories } from "@/actions/categories";

export default async function DashboardPage() {
  const categories = await getAllCategories();
  return (
    <ContentLayout title='Dashboard'>
      <DashboardBreadcrumb />
      <Card className='rounded-lg border-none mt-6'>
        <CardContent className='p-6 space-y-4'>
          <CategoryClient data={categories} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

import { getCategoryById } from "@/actions/categories";
import { getCurrentUser } from "@/lib/authProvider";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryForm } from "@/components/forms/category-form";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default async function page({
  params: { categoryId },
}: {
  params: { categoryId: any };
}) {
  const user: any = await getCurrentUser();
  const category = await getCategoryById({ categoryId });

  const userId = user?.id;
  const initialData = category;

  return (
    <ContentLayout title='Dashboard'>
      <DashboardBreadcrumb />
      <Card className='rounded-lg border-none mt-6'>
        <CardContent className='p-6'>
          <div className='px-8 py-12'>
            <CategoryForm initialData={initialData} userId={userId} />
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}

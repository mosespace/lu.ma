import PlaceholderContent from "@/components/placeholder-content";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";

export default function DashboardPage() {
  return (
    <ContentLayout title='Dashboard'>
      <DashboardBreadcrumb />
      <PlaceholderContent />
    </ContentLayout>
  );
}

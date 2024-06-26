import { getAllUsers } from "@/actions/users";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import { ContentLayout } from "@/components/dashboard/content-layout";
import { UserForm } from "@/components/forms/user-form";

export default async function page({
  params: { userId },
}: {
  params: { userId: any };
}) {
  const users = await getAllUsers();
  // console.log(users);

  const user = users?.find((user) => user.id === userId);

  const initialData = user;

  return (
    <ContentLayout title='Dashboard'>
      <DashboardBreadcrumb />
      <UserForm
        roles={[
          { _id: "ADMIN", name: "ADMIN" },
          { _id: "ATTENDEE", name: "ATTENDEE" },
          { _id: "ORGANIZER", name: "ORGANIZER" },
        ]}
        initialData={initialData}
        key={null}
      />
    </ContentLayout>
  );
}

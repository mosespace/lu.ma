"use client";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { User } from "@/constants/data";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/tables/data-table";

interface ProductsClientProps {
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className='flex items-start justify-between'>
        <Heading
          title={`All Users (${data.length})`}
          description='Manage users. click on the last three dots to either make an update on a user or delete a user.'
        />
        <Button
          className='text-xs md:text-sm'
          onClick={() => router.push(`/dashboard/users/new`)}
        >
          <Plus className='mr-2 h-4 w-4' /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
    </>
  );
};

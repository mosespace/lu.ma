"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { AlertModal } from "@/components/modal/alert-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCategory } from "@/actions/categories";
import { toast } from "@/components/ui/use-toast";

interface CellActionProps {
  data: any;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // console.log(data);

  const categoryId = data.id;
  const userId = data.userId;

  const onConfirm = async () => {
    setLoading(true);
    try {
      await deleteCategory({ categoryId, userId });
      setOpen(false);
      toast({
        variant: "default",
        title: "Category deleted successfully",
      });
      router.push("/dashboard/categories");
    } catch (error: any) {
      console.error(error);
      if (error.message.includes("Category not found")) {
        toast({
          variant: "destructive",
          title: "Wait a minute,",
          description: "The category you are trying to delete does not exist.",
        });
      } else if (error.message.includes("You are not authorized")) {
        toast({
          variant: "destructive",
          title: "Oops! Sorry.",
          description: "You are not authorized to delete this category.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "An error occurred while trying to delete the category. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/dashboard/categories/update/${categoryId}`)
            }
          >
            <Edit className='mr-2 h-4 w-4' /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className='mr-2 h-4 w-4' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

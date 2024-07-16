"use client";

import * as z from "zod";
import { useState } from "react";
import { Loader, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/heading";
import { useToast } from "../ui/use-toast";
import ImageUploader from "../image-uploader";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/actions/categories";
import { AlertModal } from "../modal/alert-modal";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "category name must be at least 3 characters" }),

  image: z.string(),
  userId: z.string(),
});

type UserFormValues = z.infer<typeof formSchema>;

interface UserFormProps {
  initialData?: any | null;
  userId: string;
}

export const CategoryForm: React.FC<UserFormProps> = ({
  initialData,
  userId,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = initialData ? "Edit category" : "Create category";
  const description = initialData ? "Edit a category." : "Add a new category";
  const action = initialData ? "Save changes" : "Create";
  const [imageUrl, setImageUrl] = useState<string>(initialData?.image || "");

  const defaultValues = initialData
    ? initialData
    : {
        name: "",
        image: "",
        userId: "",
      };

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const categoryId = initialData?.id;

  const onSubmit = async (data: UserFormValues) => {
    data.image = imageUrl;
    data.userId = userId;

    try {
      setLoading(true);
      if (initialData) {
        const req = await updateCategory({ categoryId, userId, data });
        router.push(`/dashboard/categories`);
        toast({
          title: "Category updated successfully",
        });
      } else {
        await createCategory({ data });
        router.push(`/dashboard/categories`);
        toast({
          title: "Category created successfully",
        });
      }
    } catch (error: any) {
      if (error.message.includes("Category with id not found")) {
        toast({
          variant: "destructive",
          title: "Wait a minute,",
          description: "The category you are trying to update does not exist.",
        });
      } else if (
        error.message.includes("You are not authorized to update this category")
      ) {
        toast({
          variant: "destructive",
          title: "Oops! Sorry.",
          description: "You are not authorized to update this category.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    setOpen(true);
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
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className='space-y-2 pt-4'>
        <div className='flex items-center w-full justify-between'>
          <div className='pb-2'>
            <Heading title={title} description={description} />
          </div>
          {initialData && (
            <Button
              disabled={loading}
              variant='destructive'
              size='sm'
              onClick={() => onDelete()}
            >
              <Trash className='h-4 w-4' />
            </Button>
          )}
        </div>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full gap-8 flex space-y-8'
          >
            <div className='w-1/2'>
              <ImageUploader
                label='Upload Category Image'
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint='categoryImageUploader'
              />
            </div>

            <div className='gap-8 w-1/2 flex-col flex'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='eg; party'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={loading}
                className='w-full flex gap-2'
                type='submit'
              >
                {action}
                {loading && <Loader className='animate-spin size-4' />}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

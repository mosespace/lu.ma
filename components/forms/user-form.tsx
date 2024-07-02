"use client";

import * as z from "zod";
import { useState } from "react";
import { Trash } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "../ui/use-toast";
import ImageUploader from "../image-uploader";
import { updateUser } from "@/actions/users";
const ImgSchema = z.object({
  fileName: z.string(),
  name: z.string(),
  fileSize: z.number(),
  size: z.number(),
  fileKey: z.string(),
  key: z.string(),
  fileUrl: z.string(),
  url: z.string(),
});
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "user Name must be at least 3 characters" }),
  email: z.string().min(3, { message: "Email must be valid" }),
  image: z.string().optional(),
  company: z
    .string()
    .min(3, { message: "Company must be at least 3 characters" }),
  role: z.string().min(1, { message: "Please select a role" }),
});

type UserFormValues = z.infer<typeof formSchema>;

interface UserFormProps {
  initialData: any | null;
  roles: any;
}

export const UserForm: React.FC<UserFormProps> = ({ initialData, roles }) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const title = initialData ? "Edit user" : "Create user";
  const description = initialData ? "Edit a user." : "Add a new user";
  const toastMessage = initialData ? "Product updated." : "Product created.";
  const action = initialData ? "Save changes" : "Create";
  const [imageUrl, setImageUrl] = useState<string>(initialData?.image || "");

  const defaultValues = initialData
    ? initialData
    : {
        name: "",
        company: "",
        email: "",
        role: "",
      };

  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const userId = initialData?.id;

  const onSubmit = async (data: UserFormValues) => {
    data.image = imageUrl;
    try {
      setLoading(true);
      if (initialData) {
        const req = await updateUser({ userId, data });
      } else {
        // const res = await axios.post(`/api/users/create-user`, data);
        // console.log("user", res);
      }
      router.refresh();
      router.push(`/dashboard/users`);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storeId}/users/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/users`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className='space-y-2 pt-4'>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      /> */}
      <div className='flex items-center w-full justify-between'>
        <div className='pb-2'>
          <Heading title={title} description={description} />
        </div>
        {initialData && (
          <Button
            disabled={loading}
            variant='destructive'
            size='sm'
            onClick={() => setOpen(true)}
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
          <ImageUploader
            label='Upload User Image'
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='userImageUploader'
          />

          <div className='gap-8 w-full flex-col flex'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name(s)</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='John Doe'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col lg:flex-row gap-2 w-full'>
              <FormField
                control={form.control}
                name='company'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Company'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        disabled={loading}
                        placeholder='info@email.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder='Select a role'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* @ts-ignore  */}
                      {roles.map((role) => (
                        <SelectItem key={role._id} value={role._id}>
                          {role.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading} className='w-full' type='submit'>
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

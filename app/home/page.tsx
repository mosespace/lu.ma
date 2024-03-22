import { TabsDemo } from "@/components/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Events · Luma",
  description:
    "From beautiful event pages to effortless invites and ticketing, Luma is all you need to host a memorable event.",
};

export default function page() {
  return (
    <div className='min-h-screen flex items-start justify-center'>
      <Tabs defaultValue='account' className='flex-1 max-w-screen-lg'>
        <div className='container relative  py-8 flex justify-between items-start'>
          <h2 className='font-bold text-3xl'>Events</h2>
          {/* <TabsDemo /> */}
          <TabsList className='grid grid-cols-2'>
            <TabsTrigger value='account'>Account</TabsTrigger>
            <TabsTrigger value='password'>Password</TabsTrigger>
          </TabsList>
          {/* </Tabs> */}
        </div>
        {/* <Tabs className='grid w-full grid-cols-2'> */}
        <TabsContent value='account' className='m-auto block bg-red-500'>
          <h3 className='font-bold'>No Upcoming Events</h3>
          <p className=''>You have no upcoming events. Why not host one?</p>
        </TabsContent>

        <TabsContent value='password'>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='current'>Current password</Label>
                <Input id='current' type='password' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='new'>New password</Label>
                <Input id='new' type='password' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

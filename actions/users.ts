"use server";

import { db } from "@/lib/db";

export async function getAllUsers() {
  try {
    const users = await db.user.findMany({});
    // console.log(`Users fetched successfully: ${users}`);
    return users;
  } catch (error: any) {
    console.log(`Fetching all users has failed: ${error.message}`);
  }
}

export async function updateUser({
  userId,
  data,
}: {
  userId: string;
  data: any;
}) {
  try {
    // const user = await db.user.findUnique({
    //   where: { id: userId },
    // });

    // if (!user) {
    //   console.log(`User with id ${userId} not found`);
    //   return null;
    // }

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: data,
    });
    console.log(`User updated successfully: ${updatedUser}`);
    return updatedUser;
  } catch (error: any) {
    console.log(`Updating user has failed: ${error.message}`);
    throw new Error(`Updating user has failed: ${error.message}`);
  }
}

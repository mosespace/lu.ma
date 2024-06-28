"use server";

import { db } from "@/lib/db";
import { IDBCategory } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createCategory({ data }: { data: IDBCategory }) {
  try {
    const category = await db.category.create({
      data,
    });

    // console.log(`Category has been created successfully: ${category}`);

    revalidatePath("/dashboard/categories");
    return category;
  } catch (error: any) {
    console.log(`Creating a category has failed: ${error.message}`);
  }
}

export async function getAllCategories() {
  try {
    const categories = await db.category.findMany({});
    // console.log(`Categories fetched successfully: ${categories}`);
    return categories;
  } catch (error: any) {
    console.log(`Fetching all categories has failed: ${error.message}`);
  }
}

export async function updateCategory({
  userId,
  categoryId,
  data,
}: {
  userId: string;
  categoryId: string;
  data: any;
}) {
  try {
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });

    // checking if the category exists
    if (!category) {
      throw new Error(`Category with id not found`);
    }

    // Check if the userId matches the creatorId
    if (category.userId !== userId) {
      throw new Error("You are not authorized to update this category");
    }

    const updateCategory = await db.category.update({
      where: { id: categoryId },
      data: data,
    });
    // console.log(`Category updated successfully: ${updateCategory}`);

    revalidatePath("/dashboard/categories");
    return updateCategory;
  } catch (error: any) {
    console.log(`Updating category has failed: ${error.message}`);
    throw new Error(`Updating category has failed: ${error.message}`);
  }
}

export async function deleteCategory({
  categoryId,
  userId,
}: {
  categoryId: string;
  userId: string;
}) {
  // console.log(categoryId, userId);
  try {
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    // Check if the userId matches the creatorId
    if (category.userId !== userId) {
      throw new Error("You are not authorized to delete this category");
    }

    // Proceed with deletion
    const deletedCategory = await db.category.delete({
      where: { id: categoryId },
    });

    console.log(`Category has been deleted successfully: ${categoryId}`);

    return deletedCategory;
  } catch (error: any) {
    // console.log(`Deleting a category has failed: ${error.message}`);
    throw new Error(`Deleting a category has failed: ${error.message}`);
  }
}

export async function getCategoryById({ categoryId }: { categoryId: string }) {
  try {
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });
    console.log(`Category has been found successfully: ${category}`);

    return category;
  } catch (error: any) {
    console.log(`Fetching a category has failed: ${error.message}`);
    throw new Error(`Fetching a category has failed: ${error.message}`);
  }
}

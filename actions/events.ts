"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// getting all events
export async function getAllEvents() {
  try {
    const events = await db.event.findMany({
      include: {
        category: true,
      },
    });

    // console.log(`Events fetched successfully: ${events}`);
  } catch (error: any) {
    console.log(`Fetching all events has failed: ${error.message}`);
  }
}

export async function createEvent({ data }: { data: any }) {
  console.log(data);
  try {
    // Check if the event already exists
    const existingEvent = await db.event.findUnique({
      where: {
        slug: data.slug,
      },
    });

    if (existingEvent) {
      throw new Error("Event with this title already exists.");
    }

    // Extract tags from data object received
    const tags = data.tags.map((tag: any) => ({ text: tag.text }));

    // Transforming the IEvent data to EventCreateInput
    const transformedData = {
      title: data.name,
      slug: data.slug,
      categoryId: data.categoryId,
      maxParticipants: data.maxParticipants,
      eventType: data.eventType,
      ticketType: data.ticketType,
      image: data.photo,
      country: data.country,
      state: data.state,
      address_one: data.address1,
      address_two: data.address2,
      link: data.link,
      ticketPrice: data.ticketPrice,
      email: data.email,
      contact: data.tel,
      shortDescription: data.shortDescription,
      content: JSON.stringify(data.description), // Serialize the description
      tags: {
        create: tags, // Ensure this is an array of objects
      },
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      location: data.location,
      userId: "667ae6c236b7463cc202e800",
      posters: data.posters,
    };

    const event = await db.event.create({
      data: transformedData,
    });

    console.log(`Event has been created successfully: ${event}`);

    revalidatePath("/dashboard/events");
    return event;
  } catch (error: any) {
    console.log(`Creating an event has failed: ${error.message}`);
    throw new Error(`Creating an event has failed: ${error.message}`);
  }
}

"use server";

import { revalidatePath } from "next/cache";

export async function serverAction() {
  revalidatePath("/");
  console.log("The server action has been ran.");
}

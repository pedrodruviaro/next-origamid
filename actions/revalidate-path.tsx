"use server"

import { revalidatePath } from "next/cache"

export async function revalidatePathAction(path: string) {
  // use case => create a new thing and revalidate the specific route

  revalidatePath(path)
}

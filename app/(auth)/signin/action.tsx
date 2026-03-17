"use server"

import { login } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const callbackUrl = formData.get("callbackUrl") as string

  const user = await login(email, password)
  if (!user) {
    redirect("/signin?error=invalid");
  }

  redirect(callbackUrl)
}

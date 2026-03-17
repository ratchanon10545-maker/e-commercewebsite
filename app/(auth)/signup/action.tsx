"use server"

import { users } from "@/app/data/user"
import { redirect } from "next/navigation"

export async function signUpAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const name = formData.get("name") as string

  users.push({
    id: Date.now(),
    email,
    password,
    name,
  })

  redirect("/signin")
}

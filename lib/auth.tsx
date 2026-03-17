"use server"
import { cookies } from "next/headers"
import { users } from "../app/data/user"

const COOKIE_NAME = "mock-auth"

export async function login(email: string, password: string) {
  const user = users.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) return null;

  (await cookies()).set(
    COOKIE_NAME,
    JSON.stringify({
      id: user.id,
      email: user.email,
      name: user.name,
    }),
    { httpOnly: true }
  )

  return user
}

export async function getSession() {
  const cookie = (await cookies()).get(COOKIE_NAME)
  if (!cookie) return null

  return JSON.parse(cookie.value)
}

export async function logout() {
  (await cookies()).delete(COOKIE_NAME)
}

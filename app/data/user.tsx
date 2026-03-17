export type User = {
  id: number
  email: string
  password: string
  name: string
}

export const users: User[] = [
  {
    id: 1,
    email: "test@example.com",
    password: "1234",
    name: "Test User",
  },
]
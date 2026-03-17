const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const userService = {
  // GET all users
  getAll: async () => {
    const res = await fetch(`${API_URL}/products`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch ');
    return res.json();
  },

  // GET user by ID
  getById: async (id: string) => {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) throw new Error('not found');
    return res.json();
  },

  // POST create user
  create: async (data: any) => {
    const res = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // PUT update user
  update: async (id: string, data: any) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  // DELETE user
  delete: async (id: string) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  }
};
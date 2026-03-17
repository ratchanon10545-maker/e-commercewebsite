const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const flashsaleService = {
  // GET all flashsales
  getAll: async () => {
    const res = await fetch(`${API_URL}/products/flashsales`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch flashsales');
    return res.json();
  },
}
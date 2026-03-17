import { NextResponse } from 'next/server';
import { products } from '@/app/data/products';

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Received data:', body);
  return NextResponse.json({ message: 'Data received', data: body });
}

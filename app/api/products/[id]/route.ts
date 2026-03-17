import { NextResponse } from 'next/server';
import { products } from '@/app/data/products';

export async function GET(
  { params }: { params: { id: string } }
) {
  const id = params.id; // ดึง id จาก URL
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return NextResponse.json({
      message: `Product ${id} not found`,
    }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id; // ดึง id จาก URL
  const body = await request.json();

  // จำลองว่าเราไปหาข้อมูลใน DB แล้วอัปเดต
  const updatedProduct = products.find((product) => product.id === Number(id));
  if (!updatedProduct) {
    return NextResponse.json({
      message: `Product ${id} not found`,
    }, { status: 404 });
  }
  updatedProduct.name = body.name;
  updatedProduct.price = body.price;
  updatedProduct.image = body.image;
  updatedProduct.href = body.href;
  updatedProduct.discount = body.discount;
  updatedProduct.review = body.review;

  return NextResponse.json({
    message: `Product ${id} updated successfully`,
    data: updatedProduct
  });
}
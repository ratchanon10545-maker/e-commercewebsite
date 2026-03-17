import { NextResponse } from "next/server";
import { cart } from "@/app/data/cart";

export async function GET() {
    return NextResponse.json(cart)
}
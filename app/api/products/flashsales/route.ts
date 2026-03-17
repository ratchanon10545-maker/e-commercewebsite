import { NextResponse } from 'next/server';
import { flashsales } from '@/app/data/flashsales';

export async function GET() {
    return NextResponse.json(flashsales);
}
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { DEFAULT_PRODUCTS } from '@/lib/products';

export const runtime = 'nodejs';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'products.json');

// Helper to ensure data directory and file exist
async function getProductsFromFile() {
  try {
    // Check if file exists
    await fs.access(DATA_FILE_PATH);
    const fileData = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    // If file doesn't exist, create directory and write default products
    try {
      await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
      await fs.writeFile(DATA_FILE_PATH, JSON.stringify(DEFAULT_PRODUCTS, null, 2), 'utf-8');
    } catch (writeError) {
      console.error('Error creating default products file:', writeError);
    }
    return DEFAULT_PRODUCTS;
  }
}

export async function GET() {
  const products = await getProductsFromFile();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const products = await request.json();
    if (!Array.isArray(products)) {
      return NextResponse.json({ message: 'Invalid product list format' }, { status: 400 });
    }

    await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(products, null, 2), 'utf-8');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error writing products file:', error);
    return NextResponse.json({ message: 'Failed to save products on the server' }, { status: 500 });
  }
}

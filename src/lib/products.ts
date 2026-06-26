export type Product = {
  id: string;
  name: string;
  category: string;
  specs: string;
  image?: string;
};

export const PRODUCT_STORAGE_KEY = 'mata-products';

export const CATEGORIES = [
  'All',
  'Refrigerant Gas',
  'Compressor Oil',
  'Butane Gas Cartridge',
  'Air Conditioner Copper Pipe',
  'Brazing Rod',
];

export const DEFAULT_PRODUCTS: Product[] = [
  { id: 'rg-1', name: 'MPCL R134A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'High purity refrigerant for various cooling applications.' },
  { id: 'rg-2', name: 'MPCL R410A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Efficient refrigerant for modern AC systems.' },
  { id: 'rg-3', name: 'Freon R22 Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Original Freon quality for existing systems.' },
  { id: 'rg-4', name: 'MPCL Fluoro R134A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Specialized fluoro-based R134A gas.' },
  { id: 'rg-5', name: 'Floron R410A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Reliable Floron brand R410A.' },
  { id: 'rg-6', name: 'Freon R410A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'High-performance Freon R410A.' },
  { id: 'rg-7', name: 'MPCL R404A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Ideal for commercial refrigeration.' },
  { id: 'rg-8', name: 'Industrial R22 Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Bulk supply R22 for industrial use.' },
  { id: 'rg-9', name: 'R407C Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Standard R407C for HVAC systems.' },
  { id: 'rg-10', name: 'Floron R22 Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Trusted Floron quality R22.' },
  { id: 'rg-11', name: 'MPCL R407C Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Quality R407C from MPCL.' },
  { id: 'rg-12', name: 'R1234 Yf Refrigerant Gas', category: 'Refrigerant Gas', specs: 'New generation eco-friendly refrigerant.' },
  { id: 'rg-13', name: '10kg R32 Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Convenient 10kg cylinder of R32.' },
  { id: 'rg-14', name: '450g Floron R22 Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Small 450g can for quick top-ups.' },
  { id: 'rg-15', name: 'R 507 Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Specialized R507 refrigerant.' },
  { id: 'rg-16', name: 'R134A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Standard R134A for automotive and domestic use.' },
  { id: 'rg-17', name: '45kg MPCL R404A Refrigerant Gas', category: 'Refrigerant Gas', specs: 'Bulk 45kg cylinder for large projects.' },
  { id: 'rg-18', name: 'FLORON R407', category: 'Refrigerant Gas', specs: 'Floron R407 refrigerant.' },
  { id: 'rg-19', name: 'R123 Refrigerant Gas', category: 'Refrigerant Gas', specs: 'R123 refrigerant for specialized chillers.' },
  { id: 'co-1', name: 'Subros R134a Refrigeration Compressor Oil', category: 'Compressor Oil', specs: 'High-grade oil for Subros systems.' },
  { id: 'co-2', name: 'Fluoro R134a Compressor Oil', category: 'Compressor Oil', specs: 'Synthetic oil for R134a compressors.' },
  { id: 'bg-1', name: 'MPCL Blue Flame Butane Gas Cartridge', category: 'Butane Gas Cartridge', specs: 'Portable butane gas for brazing and camping.' },
  { id: 'cp-1', name: 'Air Conditioner Copper Pipe', category: 'Air Conditioner Copper Pipe', specs: 'High-grade copper tubing for AC installation.' },
  { id: 'br-1', name: 'Copper Brazing Rods', category: 'Brazing Rod', specs: 'Superior quality rods for strong copper-to-copper joints.' },
];

export function readProducts() {
  if (typeof window === 'undefined') {
    return DEFAULT_PRODUCTS;
  }

  try {
    const savedProducts = window.localStorage.getItem(PRODUCT_STORAGE_KEY);
    if (!savedProducts) {
      return DEFAULT_PRODUCTS;
    }

    const parsedProducts = JSON.parse(savedProducts) as Product[];
    if (!Array.isArray(parsedProducts)) {
      return DEFAULT_PRODUCTS;
    }

    const savedById = new Map(parsedProducts.map((product) => [product.id, product]));
    const mergedDefaults = DEFAULT_PRODUCTS.map((product) => ({
      ...product,
      ...savedById.get(product.id),
    }));
    const addedProducts = parsedProducts.filter(
      (product) => !DEFAULT_PRODUCTS.some((defaultProduct) => defaultProduct.id === product.id),
    );

    return [...mergedDefaults, ...addedProducts];
  } catch {
    return DEFAULT_PRODUCTS;
  }
}

export function saveProducts(products: Product[]) {
  window.localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
  window.dispatchEvent(new Event('mata-products-updated'));
}


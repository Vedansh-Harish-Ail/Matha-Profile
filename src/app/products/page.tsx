import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { MessageCircle, Phone, Filter, Search } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: '1', name: 'R404A Refrigerant Gas', category: 'Refrigerant Gases', image: null, specs: 'Suitable for industrial refrigeration' },
  { id: '2', name: 'R32 Refrigerant Gas', category: 'Refrigerant Gases', image: null, specs: 'High efficiency, low GWP' },
  { id: '3', name: 'R22 Refrigerant Gas', category: 'Refrigerant Gases', image: null, specs: 'Widely used in older AC systems' },
  { id: '4', name: 'Mineral Compressor Oil', category: 'Compressor Oils', image: null, specs: 'For reciprocating compressors' },
  { id: '5', name: 'Synthetic Compressor Oil', category: 'Compressor Oils', image: null, specs: 'High performance for modern systems' },
  { id: '6', name: 'AC Copper Pipe', category: 'Copper Pipes', image: null, specs: 'High grade, durable' },
  { id: '7', name: 'Brazing Rods', category: 'Brazing Rods', image: null, specs: 'Superior quality for strong joints' },
  { id: '8', name: 'Butane Gas Cartridge', category: 'Butane Gas Cartridges', image: null, specs: 'Portable and safe' },
];

const CATEGORIES = [
  'All',
  'Refrigerant Gases',
  'Compressor Oils',
  'Butane Gas Cartridges',
  'Copper Pipes',
  'Brazing Rods',
  'Accessories'
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Product Catalog</h1>
          <p className="mt-2 text-secondary-light">Genuine refrigeration and HVAC supplies in Navi Mumbai</p>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64">
              <div className="sticky top-24">
                <div className="mb-6 flex items-center space-x-2 font-bold text-primary">
                  <Filter size={20} />
                  <span>Categories</span>
                </div>
                <ul className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button className={`w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${cat === 'All' ? 'bg-secondary text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <div className="text-sm text-gray-500">
                  Showing <span className="font-bold text-primary">{MOCK_PRODUCTS.length}</span> products
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {MOCK_PRODUCTS.map((product) => (
                  <div key={product.id} className="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
                      {/* Placeholder for Product Image */}
                      <span className="text-xs italic">Product Photo</span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                        {product.category}
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-primary">
                        {product.name}
                      </h3>
                      <p className="mb-6 text-sm text-gray-600">
                        {product.specs}
                      </p>
                      
                      <div className="mt-auto grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Details
                        </Button>
                        <a href={`https://wa.me/918080673647?text=Hello, I am interested in ${product.name}. Please share best price and availability.`} className="w-full">
                          <Button variant="whatsapp" size="sm" className="w-full">
                            <MessageCircle size={16} className="mr-1" />
                            Quote
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Inquiry Banner */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold text-primary">Looking for Bulk Orders?</h2>
          <p className="mb-8 text-gray-600">Get specialized wholesale pricing for large quantities and long-term supply contracts.</p>
          <Link href="/quote">
            <Button size="lg" variant="primary">
              Request Bulk Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

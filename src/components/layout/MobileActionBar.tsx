import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full border-t bg-white shadow-lg md:hidden">
      <a 
        href="tel:+918080673647" 
        className="flex flex-1 flex-col items-center justify-center py-3 text-primary hover:bg-gray-50"
      >
        <Phone size={20} />
        <span className="mt-1 text-xs font-medium">Call</span>
      </a>
      
      <a 
        href="https://wa.me/918080673647" 
        className="flex flex-1 flex-col items-center justify-center bg-[#25D366] py-3 text-white hover:bg-[#128C7E]"
      >
        <MessageCircle size={20} />
        <span className="mt-1 text-xs font-medium">WhatsApp</span>
      </a>
      
      <a 
        href="/contact" 
        className="flex flex-1 flex-col items-center justify-center py-3 text-accent hover:bg-gray-50"
      >
        <FileText size={20} />
        <span className="mt-1 text-xs font-medium">Quote</span>
      </a>
    </div>
  );
}

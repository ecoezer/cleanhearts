import { Phone, MessageCircle } from 'lucide-react';

export default function StickyMobileBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
            <div className="flex items-center gap-3 max-w-lg mx-auto">
                <a
                    href="tel:01638523779"
                    className="flex-1 flex items-center justify-center gap-2 bg-dark-green text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-dark-green/20 hover:bg-green-600 active:scale-95 transition-all"
                >
                    <Phone className="w-5 h-5" />
                    <span>Jetzt Anrufen</span>
                </a>
                <a
                    href="https://wa.me/491638523779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-[#25D366]/20 hover:bg-[#1ebe57] active:scale-95 transition-all"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    );
}

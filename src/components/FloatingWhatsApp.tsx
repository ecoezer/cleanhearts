import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    const whatsappUrl = 'https://wa.me/491638523779';

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ebe57] hover:scale-110 transition-all flex items-center justify-center group"
            aria-label="Kontakt per WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Fragen? Schreib uns!
            </span>
        </a>
    );
}

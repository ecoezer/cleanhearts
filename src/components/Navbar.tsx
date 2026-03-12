import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link
                        to="/"
                        className="flex items-center space-x-2"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src="/logo.png" alt="CleanHearts Logo" className="h-14 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="/#offers" className="text-accent hover:text-accent font-bold transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-accent hover:after:scale-x-100 after:transition-transform after:duration-300 pb-1 flex items-center gap-1"><span className="animate-pulse">🔥</span> Angebote</a>
                        <a href="/#services" className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:transition-transform after:duration-300 pb-1">Leistungen</a>
                        <a href="/#about" className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:transition-transform after:duration-300 pb-1">Über uns</a>
                        <a
                            href="tel:01638523779"
                            className="flex items-center gap-2 bg-dark-green text-white px-5 py-2.5 rounded-full font-bold hover:bg-green-600 transition-all transform hover:scale-105 shadow-md"
                        >
                            <Phone className="w-4 h-4" />
                            <span>0163 852 3779</span>
                        </a>
                        <Link
                            to="/book"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-dark transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Mein Termin buchen
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <a
                            href="tel:01638523779"
                            className="flex items-center gap-1.5 bg-dark-green text-white px-3 py-2 rounded-full font-bold text-sm hover:bg-green-600 transition-all shadow-md"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Anrufen</span>
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none p-2"
                            aria-label="Hauptmenü umschalten"
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full left-0 top-20">
                    <div className="px-4 py-6 space-y-4 flex flex-col">
                        <a
                            href="tel:01638523779"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-3 text-lg bg-dark-green text-white font-bold px-4 py-4 rounded-xl hover:bg-green-600 transition-colors shadow-md"
                        >
                            <Phone className="w-5 h-5" />
                            <span>📞 0163 852 3779 — Jetzt anrufen!</span>
                        </a>
                        <a
                            href="/#offers"
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-accent hover:text-accent font-bold block px-4 py-3 rounded-xl bg-accent/5 border border-accent/10 transition-colors flex items-center gap-2"
                        >
                            🔥 Angebote
                        </a>
                        <a
                            href="/#services"
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-gray-800 hover:text-primary font-medium block px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors"
                        >
                            Leistungen
                        </a>
                        <a
                            href="/#about"
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-gray-800 hover:text-primary font-medium block px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors"
                        >
                            Über uns
                        </a>
                        <div className="pt-4 px-2">
                            <Link
                                to="/book"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-md w-full text-center block"
                            >
                                Mein Termin buchen
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

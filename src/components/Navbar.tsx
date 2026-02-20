import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/#services" className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:transition-transform after:duration-300 pb-1">Leistungen</a>
                        <a href="/#about" className="text-gray-600 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary hover:after:scale-x-100 after:transition-transform after:duration-300 pb-1">Über uns</a>
                        <Link
                            to="/book"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-dark transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Termin buchen
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
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
                                Termin buchen
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

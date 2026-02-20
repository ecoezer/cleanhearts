import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/logo.svg" alt="CleanHearts Logo" className="h-14 w-auto" />
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/#services" className="text-gray-600 hover:text-primary transition-colors">Leistungen</a>
                        <a href="/#about" className="text-gray-600 hover:text-primary transition-colors">Über uns</a>
                        <Link
                            to="/book"
                            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-sm"
                        >
                            Termin buchen
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

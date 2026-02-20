import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="CleanHearts Logo" className="h-14 w-auto" />
                    </Link>

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
                </div>
            </div>
        </nav>
    );
}

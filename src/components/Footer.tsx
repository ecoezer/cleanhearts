import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-6 bg-white p-2 rounded-lg inline-block">
                            <img src="/logo.svg" alt="CleanHearts Logo" className="h-10 w-auto" />
                        </div>
                        <p className="text-gray-400">
                            Ihre zuverlässige Reinigungsfirma. Wir bringen Glanz in Ihr Leben.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary-light" />
                                <span>01638523779</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary-light" />
                                <a href="mailto:info@cleanhearts.de" className="hover:text-white transition-colors">
                                    info@cleanhearts.de
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-primary-light" />
                                <span>Deutschland</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Rechtliches</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} CleanHearts. Alle Rechte vorbehalten.</p>
                    <a href="https://www.cleanhearts.de" className="hover:text-white transition-colors block mt-2">www.cleanhearts.de</a>
                </div>
            </div>
        </footer>
    );
}

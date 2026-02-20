import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Settings, ShieldCheck } from 'lucide-react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookie-consent', 'all');
        setIsVisible(false);
    };

    const handleAcceptNecessary = () => {
        localStorage.setItem('cookie-consent', 'necessary');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 p-6 md:p-8 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center gap-6">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-2xl">
                        <Cookie className="w-8 h-8 text-primary animate-pulse" />
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                            COOKIE-EINWILLIGUNG
                            <ShieldCheck className="w-5 h-5 ml-2 text-green-500" />
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen sowie zur Analyse der Website-Nutzung (Google Analytics).
                            Mit Klick auf <span className="font-semibold">„Alle akzeptieren“</span> stimmen Sie der Verwendung aller Cookies zu.
                            Mit Klick auf <span className="font-semibold">„Nur notwendige Cookies“</span> werden nur technisch erforderliche Cookies gesetzt.
                        </p>
                        <p className="text-xs text-gray-400">
                            Weitere Informationen finden Sie in unserer{' '}
                            <Link to="/datenschutz" className="text-primary hover:underline font-medium">Datenschutzerklärung</Link>.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 w-full">
                        <button
                            onClick={() => { }}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors text-sm min-w-[140px]"
                        >
                            <Settings className="w-4 h-4" />
                            Einstellungen
                        </button>
                        <button
                            onClick={handleAcceptNecessary}
                            className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors text-sm min-w-[140px]"
                        >
                            Nur notwendige Cookies
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="px-10 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 text-sm whitespace-nowrap min-w-[140px]"
                        >
                            Alle akzeptieren
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

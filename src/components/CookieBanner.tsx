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
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-full duration-500">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.15)] border border-gray-100 p-5 md:p-6 relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>

                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-2 rounded-xl">
                        <Cookie className="w-6 h-6 text-primary" />
                    </div>

                    <div className="max-w-xl mx-auto">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center justify-center">
                            COOKIE-EINWILLIGUNG
                            <ShieldCheck className="w-4 h-4 ml-1.5 text-green-500" />
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed mb-3">
                            Unsere Website verwendet Cookies, um grundlegende Funktionen bereitzustellen sowie zur Analyse der Website-Nutzung (Google Analytics).
                            Klicken Sie auf <span className="font-semibold">„Alle akzeptieren“</span> für volle Funktionalität oder <span className="font-semibold">„Nur notwendige“</span>.
                        </p>
                        <p className="text-[10px] text-gray-400">
                            Details in der <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 w-full">
                        <button
                            onClick={() => { }}
                            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors text-xs min-w-[110px]"
                        >
                            <Settings className="w-3.5 h-3.5" />
                            Einstellungen
                        </button>
                        <button
                            onClick={handleAcceptNecessary}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors text-xs min-w-[110px]"
                        >
                            Nur notwendige
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="px-6 py-2 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-md shadow-primary/20 text-xs min-w-[110px]"
                        >
                            Alle akzeptieren
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

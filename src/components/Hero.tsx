import { Link } from 'react-router-dom';
import { Leaf, Sparkles, CheckCircle2, Phone } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-primary-light/20 via-white to-accent/20 overflow-hidden pt-20 pb-32">
            <div className="absolute top-10 right-10 opacity-10">
                <Leaf className="w-96 h-96 text-dark-green" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-10">
                <Leaf className="w-96 h-96 text-dark-green transform -scale-x-100" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="relative overflow-hidden inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-bold text-primary mb-8 shadow-xl border border-primary/20 hover:scale-105 transition-transform cursor-default group">
                    <div className="absolute top-0 left-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent z-0 pointer-events-none"></div>
                    <Sparkles className="w-4 h-4 relative z-10 animate-pulse text-accent" style={{ animationDuration: '1.5s' }} />
                    <span className="relative z-10 tracking-wide">Strahlend sauber, mit Herz</span>
                    <Sparkles className="w-3 h-3 relative z-10 animate-bounce text-accent" style={{ animationDuration: '2s' }} />
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                    Professionelle <span className="text-primary underline decoration-accent/20">Haushaltsreinigung</span><br />
                    in Köln & Umgebung
                </h1>

                <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Deine zuverlässige Putzfirma für Köln, Pulheim, Frechen und Hürth.
                    Ob Privathaushalt, Praxis oder Gewerbe – wir sorgen mit Herz für strahlende Sauberkeit.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                        to="/book"
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                        Mein Termin buchen
                    </Link>
                    <a
                        href="tel:01638523779"
                        className="group w-full sm:w-auto px-8 py-5 bg-dark-green text-white text-lg font-bold rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl shadow-dark-green/30 flex items-center justify-center gap-3 animate-pulse hover:animate-none"
                        style={{ animationDuration: '2.5s' }}
                    >
                        <Phone className="w-6 h-6 group-hover:animate-bounce" />
                        <span className="text-xl">0163 852 3779</span>
                        <span className="hidden sm:inline text-white/80 text-base font-medium">— Jetzt anrufen!</span>
                    </a>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base text-gray-600">
                    <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-dark-green" />
                        <span>Mit Rechnung</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-dark-green" />
                        <span>Steuerlich absetzbar</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-dark-green" />
                        <span>Schnelle Termine</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-dark-green" />
                        <span>Kostenlose Erstberatung</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

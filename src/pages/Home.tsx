import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import { Shield, Receipt, Clock, Sparkles, Phone } from 'lucide-react';

const trustBadges = [
    { icon: Shield, text: 'Versichert & zuverlässig' },
    { icon: Receipt, text: 'Mit Rechnung – steuerlich absetzbar' },
    { icon: Clock, text: 'Schnelle & flexible Termine' },
    { icon: Sparkles, text: 'Keine versteckten Kosten' },
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow pb-20 md:pb-0">
                <Hero />
                <Offers />
                <Benefits />
                <Services />

                {/* About/Trust Section */}
                <section id="about" className="py-24 bg-primary/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Deine Reinigungsfirma für Köln & Region</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                            Als lokale Putzfirma in Pulheim bei Köln legen wir Wert auf höchste Qualität, Pünktlichkeit und Vertrauen.
                            Ob in Köln-Innenstadt, Ehrenfeld, Lindenthal oder Pulheim – unsere geschulten Mitarbeiter sorgen für
                            makellose Sauberkeit in deinen Räumlichkeiten.
                        </p>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {trustBadges.map((badge, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <badge.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-700">{badge.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Call to action */}
                        <div className="inline-flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:01638523779"
                                className="flex items-center justify-center gap-3 bg-dark-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl shadow-dark-green/20"
                            >
                                <Phone className="w-5 h-5" />
                                <span>0163 852 3779 — Jetzt anrufen</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <StickyMobileBar />
        </div>
    );
}

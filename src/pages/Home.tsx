import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Hero />
                <Benefits />
                <Services />

                {/* About/Trust Section */}
                <section id="about" className="py-24 bg-primary/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Deine Reinigungsfirma für Köln & Region</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Als lokale Putzfirma in Pulheim bei Köln legen wir Wert auf höchste Qualität, Pünktlichkeit und Vertrauen.
                            Ob in Köln-Innenstadt, Ehrenfeld, Lindenthal oder Pulheim – unsere geschulten Mitarbeiter sorgen für
                            makellose Sauberkeit in deinen Räumlichkeiten.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

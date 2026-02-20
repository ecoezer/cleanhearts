import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <Hero />
                <Services />

                {/* About/Trust Section */}
                <section id="about" className="py-24 bg-primary/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Warum CleanHearts?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Wir legen Wert auf höchste Qualität, Pünktlichkeit und Vertrauen.
                            Unsere geschulten Mitarbeiter nutzen moderne Reinigungsmaterialien
                            und hinterlassen deine Räumlichkeiten makellos.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

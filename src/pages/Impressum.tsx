import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impressum() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Zurück zur Startseite
                </Link>

                <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                    <h1 className="text-4xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-6">Impressum</h1>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">Angaben gemäß § 5 TMG</h2>
                            <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                                E. Yilmaz<br />
                                Fasanenweg 1<br />
                                50259 Pulheim<br />
                                Deutschland
                            </p>
                        </section>

                        <section className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <h2 className="text-xl font-bold text-primary mb-4">Kontakt</h2>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Telefon: 0163 8523779<br />
                                E-Mail: <a href="mailto:info@cleanhearts.de" className="hover:underline">info@cleanhearts.de</a>
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                            <p className="text-gray-600 leading-relaxed">
                                E. Yilmaz<br />
                                Fasanenweg 1<br />
                                50259 Pulheim
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none border-t border-gray-100 pt-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Streitschlichtung</h2>
                            <p className="text-gray-600 mb-4">
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            </p>
                            <p className="mb-6">
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-semibold hover:underline bg-primary/5 px-4 py-2 rounded-lg"
                                >
                                    https://ec.europa.eu/consumers/odr
                                </a>
                            </p>
                            <p className="text-gray-600">
                                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

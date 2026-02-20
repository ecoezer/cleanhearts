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
                            <h2 className="text-xl font-semibold text-primary mb-4 uppercase tracking-wider">Betriebsadresse</h2>
                            <p className="text-2xl text-gray-800 font-medium leading-relaxed">
                                E. Yilmaz<br />
                                Fasanenweg 1<br />
                                50259 Pulheim
                            </p>
                        </section>

                        <section className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <h2 className="text-xl font-semibold text-primary mb-4">Kontakt</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Telefon: 01638523779<br />
                                E-Mail: info@cleanhearts.de<br />
                                Webseite: www.cleanhearts.de
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
                            <p className="text-gray-600 mb-4">
                                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                            </p>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Urheberrecht</h2>
                            <p className="text-gray-600">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

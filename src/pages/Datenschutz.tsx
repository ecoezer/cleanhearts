import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Datenschutz() {
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-10 border-b border-gray-100 pb-6">Datenschutzerklärung</h1>

                    <div className="space-y-12">
                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ihre Rechte</h2>
                            <p className="text-gray-600 mb-4">
                                Sie haben folgende Rechte in Bezug auf Ihre gespeicherten personenbezogenen Daten:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                                <li>Berichtigung unrichtiger Daten</li>
                                <li>Löschung Ihrer Daten</li>
                                <li>Einschränkung der Verarbeitung</li>
                                <li>Widerspruch gegen die Verarbeitung</li>
                            </ul>
                            <p className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10 text-gray-700">
                                Hierzu genügt eine formlose E-Mail an <a href="mailto:info@cleanhearts.de" className="text-primary font-semibold hover:underline">info@cleanhearts.de</a>.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. SSL-Verschlüsselung</h2>
                            <p className="text-gray-600">
                                Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Dadurch sind übermittelte Daten vor dem Zugriff Dritter geschützt.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                            <p className="text-gray-600 mb-4">
                                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 20.02.2026.
                            </p>
                            <p className="text-gray-600">
                                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

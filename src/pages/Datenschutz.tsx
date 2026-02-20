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

                    <div className="space-y-10">
                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                            </p>
                        </section>

                        <section className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">2. Verantwortlicher</h2>
                            <p className="text-gray-800 font-medium leading-relaxed">
                                E. Yilmaz<br />
                                Fasanenweg 1<br />
                                50259 Pulheim<br />
                                Telefon: 0163 8523779<br />
                                E-Mail: info@cleanhearts.de
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
                            <p className="text-gray-600 mb-4">
                                Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen, z. B. durch:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Kontaktformular</li>
                                <li>E-Mail-Anfragen</li>
                                <li>WhatsApp-Kontakt</li>
                                <li>Telefonische Anfragen</li>
                            </ul>
                            <p className="text-gray-600 mt-4 mb-2">Dabei können folgende Daten erhoben werden:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Name, E-Mail-Adresse, Telefonnummer</li>
                                <li>Adresse (bei Angebotsanfragen)</li>
                                <li>Inhalt der Nachricht</li>
                            </ul>
                            <p className="text-gray-600 mt-4">Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Zweck der Datenverarbeitung</h2>
                            <p className="text-gray-600">
                                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu folgenden Zwecken: Bearbeitung von Kontaktanfragen, Erstellung von Angeboten, Kommunikation mit Kunden und Interessenten sowie Vertragserfüllung und Abrechnung.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Weitergabe von Daten</h2>
                            <p className="text-gray-600">
                                Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nicht, außer es besteht eine gesetzliche Verpflichtung oder dies ist zur Vertragserfüllung erforderlich.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Server-Log-Dateien</h2>
                            <p className="text-gray-600">
                                Der Hosting-Anbieter dieser Website erhebt automatisch Informationen in sogenannten Server-Log-Dateien (Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse anonymisiert, Uhrzeit). Diese Daten sind nicht bestimmten Personen zuordenbar.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cookies</h2>
                            <p className="text-gray-600">
                                Unsere Website verwendet Cookies, um die Nutzung benutzerfreundlicher zu machen. Sie können das Setzen von Cookies in Ihrem Browser deaktivieren.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Kontaktformular</h2>
                            <p className="text-gray-600">
                                Angaben aus dem Kontaktformular werden inklusive Ihrer Kontaktdaten gespeichert, um Ihre Anfrage zu bearbeiten. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">9. WhatsApp</h2>
                            <p className="text-gray-600">
                                Bei Kontakt über WhatsApp werden Ihre Daten (Telefonnummer, Name, Nachrichteninhalt) von WhatsApp verarbeitet. Anbieter: WhatsApp Ireland Limited, Dublin, Irland.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Google Maps & 11. analytics</h2>
                            <p className="text-gray-600">
                                Diese Website nutzt Google Maps zur Standortdarstellung sowie Google Analytics zur Webanalyse. Anbieter: Google Ireland Limited, Dublin, Irland. IP-Adressen werden anonymisiert.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none border-t border-gray-100 pt-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">12. Ihre Rechte</h2>
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
                            <h2 className="text-xl font-bold text-gray-900 mb-4">13. SSL-Verschlüsselung</h2>
                            <p className="text-gray-600">
                                Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Dadurch sind übermittelte Daten vor dem Zugriff Dritter geschützt.
                            </p>
                        </section>

                        <section className="prose prose-purple max-w-none border-t border-gray-100 pt-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">14. Aktualität und Änderung</h2>
                            <p className="text-gray-600 mb-4">
                                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 20.02.2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

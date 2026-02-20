import { useState } from 'react';
import { Clock, Droplets, Euro, CalendarCheck } from 'lucide-react';
import Footer from '../components/Footer';

export default function Booking() {
    const [hours, setHours] = useState<number>(2.0);
    const [needsSupplies, setNeedsSupplies] = useState<boolean>(false);

    // Hourly rates
    const rateWithSupplies = 29.90;
    const rateWithoutSupplies = 24.90;

    const currentRate = needsSupplies ? rateWithSupplies : rateWithoutSupplies;
    const totalPrice = hours * currentRate;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappMessage = `Hallo! Ich möchte eine Reinigung buchen:\n- Dauer: ${hours} Stunden\n- Reinigungsmittel von CleanHearts: ${needsSupplies ? 'Ja' : 'Nein'}\n- Voraussichtlicher Preis: ${totalPrice.toFixed(2)}€\nBitte um Rückmeldung zur Terminvereinbarung.`;
        window.open(`https://wa.me/491638523779?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-grow py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Termin Buchen</h1>
                        <p className="text-lg text-gray-600">
                            Wählen Sie den gewünschten Umfang und wir melden uns schnellstmöglich bei Ihnen.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-10">

                            {/* Hours Selection */}
                            <div>
                                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span>Gewünschte Dauer (Stunden)</span>
                                </label>

                                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                                    {[2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0].map((h) => (
                                        <button
                                            key={h}
                                            type="button"
                                            onClick={() => setHours(h)}
                                            className={`py-3 rounded-xl border-2 font-medium transition-all ${hours === h
                                                ? 'border-primary bg-primary/10 text-primary scale-105'
                                                : 'border-gray-200 text-gray-500 hover:border-primary/40'
                                                }`}
                                        >
                                            {h}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Supplies Selection */}
                            <div>
                                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
                                    <Droplets className="w-6 h-6 text-primary" />
                                    <span>Reinigungsmittel</span>
                                </label>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setNeedsSupplies(false)}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all ${!needsSupplies
                                            ? 'border-primary bg-primary/5 ring-4 ring-primary/10'
                                            : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                                            }`}
                                    >
                                        <div className="font-semibold text-lg text-gray-900">Stelle ich selbst</div>
                                        <div className="text-gray-500 mt-1">Sie stellen alle Materialien</div>
                                        <div className="mt-4 text-primary font-bold">24,90€ / Std</div>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setNeedsSupplies(true)}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all ${needsSupplies
                                            ? 'border-primary bg-primary/5 ring-4 ring-primary/10'
                                            : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                                            }`}
                                    >
                                        <div className="font-semibold text-lg text-gray-900">Bitte mitbringen</div>
                                        <div className="text-gray-500 mt-1">Wir bringen alles Notwendige mit</div>
                                        <div className="mt-4 text-primary font-bold">29,90€ / Std</div>
                                    </button>
                                </div>
                            </div>

                            {/* Price Summary */}
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-gray-100">
                                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                                        <Euro className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Gesamtpreis</div>
                                        <div className="text-3xl font-extrabold text-gray-900">
                                            {totalPrice.toFixed(2).replace('.', ',')}€
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-6 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                                >
                                    <CalendarCheck className="w-6 h-6 shrink-0" />
                                    <span className="whitespace-nowrap">Jetzt per WhatsApp anfragen</span>
                                </button>
                            </div>

                            <p className="text-center text-sm text-gray-500 mt-4">
                                Sie werden zu WhatsApp weitergeleitet, um die Details zu besprechen. Es ist noch keine verbindliche Buchung.
                            </p>

                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

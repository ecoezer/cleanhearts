import { useState } from 'react';
import { Clock, Droplets, Euro, CalendarCheck, Calendar as CalendarIcon } from 'lucide-react';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import TimePicker from '../components/TimePicker';



export default function Booking() {
    const [hours, setHours] = useState<number>(2.0);
    const [needsSupplies, setNeedsSupplies] = useState<boolean>(false);
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState<string>('');
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false);



    const timeSlots = [
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
        "17:00", "17:30", "18:00"
    ];

    // Filter time slots if date is today
    const filteredTimeSlots = timeSlots.filter(slot => {
        const selectedDate = new Date(date);
        const today = new Date();
        const isToday = selectedDate.toDateString() === today.toDateString();

        if (!isToday) return true;

        const [hours, minutes] = slot.split(':').map(Number);
        const slotTime = new Date();
        slotTime.setHours(hours, minutes, 0, 0);

        const leadTime = 60 * 60 * 1000; // 1 hour lead time
        return slotTime.getTime() > (today.getTime() + leadTime);
    });

    // Reset time if it's no longer in filtered slots
    if (time && !filteredTimeSlots.includes(time)) {
        setTime('');
    }




    // Hourly rates
    const rateWithSupplies = 29.90;
    const rateWithoutSupplies = 26.90;


    const currentRate = needsSupplies ? rateWithSupplies : rateWithoutSupplies;
    const totalPrice = hours * currentRate;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!date || !time) {
            alert('Bitte wählen Sie ein Datum und eine Uhrzeit aus.');
            return;
        }

        const [year, month, day] = date.split('-');
        const formattedDate = `${day}.${month}.${year}`;

        const whatsappMessage = `Hallo! Ich möchte eine Reinigung buchen:\n\n📅 Termin: ${formattedDate} um ${time} Uhr\n\n⏱️ Dauer: ${hours} Stunden\n🧼 Reinigungsmittel von CleanHearts: ${needsSupplies ? 'Ja' : 'Nein'}\n💰 Voraussichtlicher Preis: ${totalPrice.toFixed(2).replace('.', ',')}€\n\nBitte um Rückmeldung zur Terminvereinbarung.`;
        window.open(`https://wa.me/491638523779?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };



    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <main className="flex-grow py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Termin Buchen</h1>
                        <p className="text-lg text-gray-600">
                            Wähle den gewünschten Umfang und wir melden uns schnellstmöglich bei dir.
                        </p>
                    </div>

                    <div className="relative group/card overflow-hidden bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(109,40,217,0.12)] border-2 border-primary/10 p-8 md:p-12 transition-all duration-700 hover:shadow-[0_48px_80px_-16px_rgba(109,40,217,0.18)] hover:border-primary/20">
                        {/* Elegant gradient background */}
                        <div className="absolute inset-0 bg-linear-to-br from-white via-white to-primary/5 opacity-50 pointer-events-none"></div>

                        <div className="relative z-10">

                            <div className="flex justify-between items-start mb-10">
                                <div className="space-y-1">
                                    <h2 className="text-3xl font-bold text-gray-900">Privat-Reinigung</h2>
                                    <p className="text-gray-500 font-medium">Unser beliebtester Buchungsweg</p>
                                </div>
                                {hours === 3 && (
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase animate-[scale-in_0.3s_ease-out] shadow-sm ring-1 ring-primary/20">
                                        Meistgefragt
                                    </span>
                                )}

                            </div>

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

                                {/* Date & Time Selection */}
                                <div className="grid sm:grid-cols-2 gap-8 bg-primary/5 p-6 md:p-8 rounded-3xl border border-primary/10">
                                    <div className="group">
                                        <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4 group-focus-within:text-primary transition-colors">
                                            <CalendarCheck className="w-6 h-6 text-primary" />
                                            <span>Wunschdatum</span>
                                        </label>
                                        <div
                                            className="relative cursor-pointer group/date"
                                            onClick={() => setShowCalendar(true)}
                                        >
                                            <div className="w-full p-4 pl-5 pr-12 rounded-2xl border-2 border-white bg-white shadow-sm transition-all text-gray-700 font-medium group-hover/date:border-primary/20 group-hover/date:shadow-md">
                                                {new Date(date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                            </div>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary group-hover/date:scale-110 transition-transform">
                                                <CalendarIcon className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {showCalendar && (
                                            <Calendar
                                                selectedDate={date}
                                                onSelect={(newDate) => {
                                                    setDate(newDate);
                                                    setShowCalendar(false);
                                                }}
                                                onClose={() => setShowCalendar(false)}
                                            />
                                        )}



                                    </div>
                                    <div className="group">
                                        <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4 group-focus-within:text-primary transition-colors">
                                            <Clock className="w-6 h-6 text-primary" />
                                            <span>Uhrzeit</span>
                                        </label>
                                        <div
                                            className="relative cursor-pointer group/time"
                                            onClick={() => setShowTimePicker(true)}
                                        >
                                            <div className={`w-full p-4 pl-5 pr-12 rounded-2xl border-2 border-white shadow-sm transition-all text-gray-700 font-medium group-hover/time:border-primary/20 group-hover/time:shadow-md ${time ? 'bg-white' : 'bg-gray-50/50 text-gray-400'}`}>
                                                {time ? `${time} Uhr` : 'Wähle eine Zeit'}
                                            </div>

                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary group-hover/time:scale-110 transition-transform">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {showTimePicker && (
                                            <TimePicker
                                                selectedDate={date}
                                                selectedTime={time}
                                                onSelect={(newTime) => {
                                                    setTime(newTime);
                                                    setShowTimePicker(false);
                                                }}
                                                onClose={() => setShowTimePicker(false)}
                                                timeSlots={timeSlots}
                                                isToday={new Date(date).toDateString() === new Date().toDateString()}
                                                currentTime={new Date()}
                                            />
                                        )}
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
                                            <div className="text-gray-500 mt-1">Du stellst alle Materialien</div>
                                            <div className="mt-4 text-primary font-bold">26,90€ / Std</div>

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
                                        className="w-full md:w-auto px-5 py-3 bg-primary text-white text-base font-bold rounded-xl hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                                    >
                                        <CalendarCheck className="w-5 h-5 shrink-0" />
                                        <span className="whitespace-nowrap">Jetzt per WhatsApp anfragen</span>
                                    </button>

                                </div>

                                <p className="text-center text-sm text-gray-500 mt-4 leading-relaxed">
                                    * Du wirst zu WhatsApp weitergeleitet, um die Details zu besprechen. Es ist noch keine verbindliche Buchung.<br />
                                    Auf Wunsch kann eine Rechnung ausgestellt werden.
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

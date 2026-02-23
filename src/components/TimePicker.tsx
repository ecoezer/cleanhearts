import { X } from 'lucide-react';

interface TimePickerProps {
    selectedDate: string;
    selectedTime: string;
    onSelect: (time: string) => void;
    onClose: () => void;
    timeSlots: string[];
    isToday: boolean;
    currentTime: Date;
}

export default function TimePicker({ selectedTime, onSelect, onClose, timeSlots, isToday, currentTime }: TimePickerProps) {

    // Filter time slots based on lead time (1 hour from now) if it's today
    const filteredTimeSlots = timeSlots.filter(slot => {
        if (!isToday) return true;

        const [hours, minutes] = slot.split(':').map(Number);
        const slotTime = new Date(currentTime);
        slotTime.setHours(hours, minutes, 0, 0);

        // Add 1 hour buffer
        const minTime = new Date(currentTime.getTime() + 60 * 60 * 1000);

        return slotTime > minTime;
    });

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-gray-100 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-gray-50 flex items-center justify-between bg-gradient-to-br from-primary/5 via-white to-white">
                    <div className="text-2xl font-extrabold text-gray-900 tracking-tight">
                        Wunschuhrzeit
                    </div>
                </div>

                {/* Time Grid */}
                <div className="p-6 sm:p-8 pb-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {filteredTimeSlots.length === 0 ? (
                        <div className="text-center text-gray-500 py-8">
                            Für heute sind leider keine Termine mehr verfügbar. Bitte wähle ein anderes Datum.
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                            {filteredTimeSlots.map(slot => (
                                <button
                                    key={slot}
                                    type="button"
                                    onClick={() => onSelect(slot)}
                                    className={`py-3 sm:py-4 rounded-2xl flex items-center justify-center text-base sm:text-lg font-bold transition-all
                                        ${selectedTime === slot
                                            ? 'bg-primary text-white shadow-xl shadow-primary/40 scale-105 z-10'
                                            : 'text-gray-800 bg-gray-50 hover:bg-primary/10 hover:text-primary ring-1 ring-gray-100'
                                        }
                                    `}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer / Actions */}
                <div className="p-6 sm:p-8 pt-0 flex justify-end">
                    <button
                        onClick={onClose}
                        className="flex items-center space-x-2 px-6 py-3 rounded-2xl text-gray-500 font-bold hover:bg-gray-100 transition-all hover:text-gray-900"
                    >
                        <X className="w-6 h-6" />
                        <span>Schließen</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface CalendarProps {
    selectedDate: string; // ISO string (YYYY-MM-DD)
    onSelect: (date: string) => void;
    onClose: () => void;
}

export default function Calendar({ selectedDate, onSelect, onClose }: CalendarProps) {
    const [viewDate, setViewDate] = useState(new Date(selectedDate || new Date()));

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const currentYear = viewDate.getFullYear();
    const currentMonth = viewDate.getMonth();

    const monthNames = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const handlePrevMonth = () => {
        setViewDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(currentYear, currentMonth + 1, 1));
    };

    const isDateDisabled = (year: number, month: number, day: number) => {
        const d = new Date(year, month, day);
        // Disable past dates and Sundays (0 = Sunday)
        return d < today || d.getDay() === 0;
    };


    const isSelected = (year: number, month: number, day: number) => {
        const d = new Date(year, month, day);
        return d.toISOString().split('T')[0] === selectedDate;
    };

    const isToday = (year: number, month: number, day: number) => {
        const d = new Date(year, month, day);
        return d.toDateString() === today.toDateString();
    };

    const renderDays = () => {
        const days = [];
        const totalDays = daysInMonth(currentYear, currentMonth);
        const firstDay = firstDayOfMonth(currentYear, currentMonth);

        // Adjust for Monday start (0 is Sunday, 1 is Monday)
        const offset = firstDay === 0 ? 6 : firstDay - 1;

        // Empty slots for previous month
        for (let i = 0; i < offset; i++) {
            days.push(<div key={`empty-${i}`} className="h-12 w-12 sm:h-14 sm:w-14"></div>);
        }

        // Days of current month
        for (let day = 1; day <= totalDays; day++) {
            const disabled = isDateDisabled(currentYear, currentMonth, day);
            const selected = isSelected(currentYear, currentMonth, day);
            const current = isToday(currentYear, currentMonth, day);

            days.push(
                <button
                    key={day}
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                        const d = new Date(currentYear, currentMonth, day);
                        // Convert to local ISO date string
                        const year = d.getFullYear();
                        const month = String(d.getMonth() + 1).padStart(2, '0');
                        const dayStr = String(d.getDate()).padStart(2, '0');
                        onSelect(`${year}-${month}-${dayStr}`);
                    }}
                    className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center text-base sm:text-lg font-bold transition-all
                        ${disabled
                            ? 'text-gray-300 cursor-not-allowed'
                            : selected
                                ? 'bg-primary text-white shadow-xl shadow-primary/40 scale-110 z-10'
                                : current
                                    ? 'text-primary bg-primary/10 ring-2 ring-primary/20'
                                    : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
                        }
                    `}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

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
                    <button
                        onClick={handlePrevMonth}
                        className="p-3 hover:bg-white rounded-full transition-all text-gray-600 hover:text-primary hover:shadow-sm"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>

                    <div className="text-2xl font-extrabold text-gray-900 tracking-tight">
                        {monthNames[currentMonth]} {currentYear}
                    </div>

                    <button
                        onClick={handleNextMonth}
                        className="p-3 hover:bg-white rounded-full transition-all text-gray-600 hover:text-primary hover:shadow-sm"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>
                </div>

                {/* Calendar Grid */}
                <div className="p-6 sm:p-8 pb-4">
                    {/* Weekdays */}
                    <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4 sm:mb-6">
                        {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map(day => (
                            <div key={day} className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Days */}
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                        {renderDays()}
                    </div>
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

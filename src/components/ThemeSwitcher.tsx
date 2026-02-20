import { useState, useEffect } from 'react';
import { Palette, ChevronDown, Check } from 'lucide-react';

type Theme = 'default' | 'vibrant' | 'ocean' | 'pastel';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>('default');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        // Remove all theme classes first
        root.classList.remove('theme-vibrant', 'theme-ocean', 'theme-pastel');

        if (theme !== 'default') {
            root.classList.add(`theme-${theme}`);
        }
    }, [theme]);

    return (
        <div className="fixed top-24 left-6 z-[60] group">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white/90 backdrop-blur-md border border-gray-200 p-2.5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 group"
            >
                <div className={`p-1.5 rounded-lg ${theme !== 'default' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                    <Palette className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-gray-700 hidden group-hover:block pr-1">Design</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-[-1]"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 min-w-[200px] animate-in slide-in-from-top-2 duration-200">
                        <button
                            onClick={() => { setTheme('default'); setIsOpen(false); }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${theme === 'default' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <span>Standard (Sanft)</span>
                            {theme === 'default' && <Check className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => { setTheme('vibrant'); setIsOpen(false); }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${theme === 'vibrant' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <span>Vibrant (Kräftig)</span>
                            {theme === 'vibrant' && <Check className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => { setTheme('ocean'); setIsOpen(false); }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${theme === 'ocean' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <span>Ocean (Frisch Blue)</span>
                            {theme === 'ocean' && <Check className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={() => { setTheme('pastel'); setIsOpen(false); }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${theme === 'pastel' ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <span>Pastel (Zart)</span>
                            {theme === 'pastel' && <Check className="w-4 h-4" />}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

import { Link } from 'react-router-dom';
import { Star, Gift, Users, Phone, ArrowRight, Building2 } from 'lucide-react';

const offers = [
    {
        icon: Star,
        emoji: '⭐',
        badge: 'Willkommensangebot',
        title: '20% Rabatt auf die erste Reinigung',
        description: 'Teste unseren Service mit 20% Rabatt auf die erste Reinigung.',
        oldPrice: '26,90€',
        newPrice: '21,50€',
        unit: 'pro Stunde',
        cta: 'Jetzt buchen',
        ctaType: 'book' as const,
        linkState: { isFirstTime: true },
        gradient: 'from-amber-400 via-orange-400 to-red-400',
        bgGlow: 'bg-amber-50',
        borderColor: 'border-amber-200',
        badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
        icon: Gift,
        emoji: '🎁',
        badge: 'Gratis Zusatzleistung',
        title: 'Kostenlos inklusive',
        description: 'Bei einer Buchung von mindestens 3 Stunden erhältst du gratis:',
        features: ['Kühlschrankreinigung', 'Backofenreinigung'],
        cta: 'Jetzt buchen',
        ctaType: 'book' as const,
        gradient: 'from-emerald-400 via-green-400 to-teal-400',
        bgGlow: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
        icon: Users,
        emoji: '👥',
        badge: 'Empfehlungsbonus',
        title: 'Freund empfehlen & 20€ erhalten',
        description: 'Empfiehl uns weiter. Wenn dein Freund bucht, bekommst du 20€.',
        highlight: '20€ Gutschein',
        cta: 'Jetzt buchen',
        ctaType: 'book' as const,
        gradient: 'from-violet-400 via-purple-400 to-indigo-400',
        bgGlow: 'bg-violet-50',
        borderColor: 'border-violet-200',
        badgeColor: 'bg-violet-100 text-violet-800',
    },
    {
        icon: Building2,
        emoji: '🏢',
        badge: 'Gewerbekunden',
        title: 'Büroreinigung',
        description: 'Professionelle Reinigung für dein Büro oder Gewerbe – zuverlässig und gründlich.',
        price: '45,00€',
        unit: 'pro Stunde',
        cta: 'Jetzt buchen',
        ctaType: 'book' as const,
        linkState: { serviceType: 'buero' },
        gradient: 'from-sky-400 via-blue-400 to-indigo-400',
        bgGlow: 'bg-sky-50',
        borderColor: 'border-sky-200',
        badgeColor: 'bg-sky-100 text-sky-800',
    },
];

export default function Offers() {
    return (
        <section id="offers" className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-bold mb-5 border border-accent/20">
                        <span>🔥</span>
                        <span>Aktuelle Angebote</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Unsere <span className="text-primary italic">Top-Angebote</span> für dich
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Profitiere von unseren exklusiven Angeboten und spare bei deiner nächsten Reinigung.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl ${offer.bgGlow} border ${offer.borderColor} p-1 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col`}
                        >
                            {/* Gradient top bar */}
                            <div className={`h-2 rounded-t-3xl bg-gradient-to-r ${offer.gradient}`} />

                            <div className="p-7 flex flex-col flex-grow">
                                {/* Badge */}
                                <div className="min-h-[32px] flex justify-center mb-5">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${offer.badgeColor}`}>
                                        <span>{offer.emoji}</span>
                                        <span>{offer.badge}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug min-h-[56px]">
                                    {offer.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[60px]">
                                    {offer.description}
                                </p>

                                {/* Flexible content area */}
                                <div className="flex-grow flex flex-col justify-end">
                                    {/* Price comparison */}
                                    {'oldPrice' in offer && offer.oldPrice && (
                                        <div className="bg-white rounded-2xl p-3 mb-5 border border-gray-100 shadow-sm h-[140px] flex flex-col justify-center">
                                            <div className="flex items-center justify-center gap-1 sm:gap-2">
                                                <div className="text-center">
                                                    <p className="text-[10px] text-gray-400 mb-1">Statt</p>
                                                    <p className="text-base font-bold text-gray-400 line-through">{offer.oldPrice}</p>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                                                <div className="text-center">
                                                    <p className="text-[10px] text-dark-green font-bold mb-1">Jetzt nur</p>
                                                    <p className="text-xl font-extrabold text-dark-green tracking-tight">{offer.newPrice}</p>
                                                </div>
                                            </div>
                                            <p className="text-center text-[10px] text-gray-500 mt-2">{offer.unit}</p>
                                        </div>
                                    )}

                                    {/* Features list */}
                                    {'features' in offer && offer.features && (
                                        <div className="bg-white rounded-2xl p-4 mb-5 border border-gray-100 shadow-sm h-[140px] flex flex-col justify-center overflow-hidden">
                                            <ul className="space-y-2">
                                                {offer.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2">
                                                        <div className="w-5 h-5 bg-dark-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                            <span className="text-dark-green text-[10px] font-bold">✓</span>
                                                        </div>
                                                        <span className="text-gray-700 font-medium text-xs lg:text-sm leading-tight">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="text-[10px] text-gray-500 mt-2 italic text-center">(Bei einer Buchung von 3 Std.)</p>
                                        </div>
                                    )}

                                    {/* Highlight */}
                                    {'highlight' in offer && offer.highlight && (
                                        <div className="bg-white rounded-2xl p-5 mb-5 border border-gray-100 shadow-sm text-center h-[140px] flex flex-col justify-center">
                                            <p className="text-3xl font-extrabold text-primary">{offer.highlight}</p>
                                            <p className="text-xs text-gray-500 mt-1">für jede erfolgreiche Empfehlung</p>
                                        </div>
                                    )}

                                    {/* Single price */}
                                    {'price' in offer && offer.price && (
                                        <div className="bg-white rounded-2xl p-5 mb-5 border border-gray-100 shadow-sm text-center h-[140px] flex flex-col justify-center">
                                            <p className="text-3xl font-extrabold text-primary">{offer.price}</p>
                                            <p className="text-xs text-gray-500 mt-1">{offer.unit}</p>
                                        </div>
                                    )}

                                    {/* CTA Button */}
                                    {offer.ctaType === 'book' ? (
                                        <Link
                                            to="/book"
                                            state={'linkState' in offer ? offer.linkState : undefined}
                                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${offer.gradient} hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300`}
                                        >
                                            {offer.cta}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    ) : (
                                        <a
                                            href="tel:01638523779"
                                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${offer.gradient} hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300`}
                                        >
                                            <Phone className="w-5 h-5" />
                                            <span>{offer.cta}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

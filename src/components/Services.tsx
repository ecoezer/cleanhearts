import { useRef, useState, useEffect } from 'react';
import { Home, Stethoscope, Building2, PackageCheck, X, Check, Droplets } from 'lucide-react';

const services = [
    {
        title: 'Haushaltsreinigung – Standard',
        description: 'Professionelle Grundreinigung für dein Zuhause. Was gehört dazu? Details per Klick.',
        features: [
            'Staubsaugen und Reinigen aller Böden (Fliesen, Parkett, Laminat, Teppichböden)',
            'Reinigung des Badezimmers und WCs (alle Oberflächen, Armaturen, Fliesenwände)',
            'Küchenreinigung (alle Oberflächen, Arbeitsplatte, Spüle, Kochfeld, Küchenschränke)',
            'Gründliche Reinigung aller Spiegel und Türen'
        ],
        icon: Home,
    },
    {
        title: 'Praxisreinigung',
        description: 'Wir reinigen deine Praxis nach individuellen Wünschen. Gerne eine Anfrage erbeten.',
        icon: Stethoscope,
    },
    {
        title: 'Treppenhausreinigung',
        description: 'Pflege und Werterhaltung für Mehrfamilienhäuser und Bürogebäude. Details per Klick.',
        features: [
            'Fachgerechtes Saugen und Wischen der Treppen',
            'Gründliche Reinigung von Handläufen und Geländern',
            'Reinigung der Treppenhauswände'
        ],
        icon: Building2,
    },
    {
        title: 'Einzugsreinigung',
        description: 'Perfekte Sauberkeit beim Ein- oder Auszug für eine reibungslose Übergabe. Details per Klick.',
        features: [
            'Böden saugen und wischen',
            'Komplette Reinigung des Badezimmers',
            'Fensterreinigung inklusive Rahmen',
            'Staubwischen (falls Möbel vorhanden)',
            'Küchenreinigung inkl. Schränke & Arbeitsplatte'
        ],
        icon: PackageCheck,
    },
    {
        title: 'Fensterreinigung',
        description: 'Klare Sicht für dein Zuhause oder Büro. Details per Klick.',
        features: [
            'Reinigung der Fensterscheiben innen und außen',
            'Reinigung der Fensterrahmen',
            'Entfernung von Staub und Schmutz'
        ],
        icon: Droplets,
    },
];

function Modal({ service, onClose }: { service: typeof services[0], onClose: () => void }) {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                            <service.icon className="w-7 h-7" />
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-400" />
                        </button>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Hier ist eine Übersicht der Leistungen, die standardmäßig in der {service.title} enthalten sind:
                    </p>

                    {service.features ? (
                        <ul className="space-y-4">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors">
                                    <div className="mt-1 bg-primary/20 rounded-full p-1 mr-3 flex-shrink-0">
                                        <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100 italic">
                            {service.description}
                        </p>
                    )}

                    <button
                        onClick={onClose}
                        className="w-full mt-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95"
                    >
                        Verstanden
                    </button>
                </div>
            </div>
        </div>
    );
}

function TiltCard({ service, onClick }: { service: typeof services[0], onClick: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
    const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = -((y - centerY) / centerY);

        setTilt({ rotateX: percentY * 10, rotateY: percentX * 10, scale: 1.05 });
        setGlow({ x, y, opacity: 1 });
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
        setGlow(prev => ({ ...prev, opacity: 0 }));
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
                transition: isHovered ? 'none' : 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d'
            }}
            className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer z-10 hover:z-20 h-full"
        >
            {/* Dynamic Glow Background */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    opacity: glow.opacity,
                    backgroundImage: `radial-gradient(circle at ${glow.x}px ${glow.y}px, rgba(128, 107, 155, 0.15), transparent 50%)`,
                    transition: isHovered ? 'none' : 'opacity 0.5s ease-out'
                }}
            />

            {/* Pop-out Content */}
            <div
                className="relative z-10 p-8 h-full flex flex-col"
                style={{
                    transform: isHovered ? 'translateZ(40px)' : 'translateZ(0px)',
                    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }}
            >
                <div className="w-14 h-14 bg-primary/10 rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>

                <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-50">
                    <span className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                        Details anzeigen <span aria-hidden="true">&rarr;</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section id="services" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Dienstleistungen</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Maßgeschneiderte Reinigungslösungen für jeden Anspruch
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 perspective-1000">
                    {services.map((service, index) => (
                        <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[300px] flex">
                            <TiltCard
                                service={service}
                                onClick={() => setSelectedService(service)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedService && (
                <Modal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                />
            )}
        </section>
    );
}

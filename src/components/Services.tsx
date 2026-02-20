import { useRef, useState } from 'react';
import { Home, Stethoscope, Building2, PackageCheck } from 'lucide-react';

const services = [
    {
        title: 'Haushaltsreinigung',
        description: 'Gründliche und zuverlässige Reinigung Ihres privaten Zuhauses.',
        icon: Home,
    },
    {
        title: 'Praxisreinigung',
        description: 'Hygienische Sauberkeit nach höchsten Standards für Ihre Arztpraxis.',
        icon: Stethoscope,
    },
    {
        title: 'Treppenhausreinigung',
        description: 'Pflege und Werterhaltung für Mehrfamilienhäuser und Bürogebäude.',
        icon: Building2,
    },
    {
        title: 'Einzugsreinigung',
        description: 'Perfekte Sauberkeit beim Ein- oder Auszug für eine reibungslose Übergabe.',
        icon: PackageCheck,
    },
];

function TiltCard({ service }: { service: typeof services[0] }) {
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
            style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
                transition: isHovered ? 'none' : 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d'
            }}
            className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer z-10 hover:z-20"
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
                        Details <span aria-hidden="true">&rarr;</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Dienstleistungen</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Maßgeschneiderte Reinigungslösungen für jeden Anspruch
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
                    {services.map((service, index) => (
                        <TiltCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

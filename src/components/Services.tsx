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

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Dienstleistungen</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Maßgeschneiderte Reinigungslösungen für jeden Anspruch
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-8 hover:bg-primary/5 transition-colors border border-gray-100 hover:border-primary/20 group"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

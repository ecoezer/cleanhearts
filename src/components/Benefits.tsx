import { Shield, Sparkles, Brain, Heart } from 'lucide-react';

const benefits = [

    {
        icon: Shield,
        text: 'Ein Sauberes zu Hause gibt Sicherheit und mentale Ruhe.',
    },
    {
        icon: Heart,
        text: 'Du fühlst dich wohler und willst zu Hause bleiben.',
    },
    {
        icon: Brain,
        text: 'Ordnung bedeutet bei dir weniger Stress und klareren Kopf.',
    },
];

const questions = [
    'Ein Besuch steht an?',
    'Dir fehlt die Zeit?',
    'Die Lust?',
    'Die Motivation?',
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Vorteile eines <span className="text-primary italic">Sauberen Zuhauses</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-primary/20 mx-auto rounded-full mb-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl transition-all duration-500 text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="relative p-12 rounded-[3rem] bg-primary/5 border border-primary/10 overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-primary/5 -mr-10 -mt-10">
                        <Sparkles className="w-48 h-48 opacity-10" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <p className="text-xl md:text-2xl text-gray-700 mb-12 italic leading-relaxed">
                            "Doch… Manchmal kann es anstrengend sein, den Haushalt wieder in den Glanz zu bringen."
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {questions.map((question, index) => (
                                <div key={index} className="bg-white/60 backdrop-blur-sm px-4 py-6 rounded-2xl border border-primary/5 shadow-sm">
                                    <p className="text-primary font-bold">{question}</p>
                                </div>
                            ))}
                        </div>

                        <div className="inline-block p-1 rounded-3xl bg-gradient-to-tr from-primary to-primary-dark shadow-2xl shadow-primary/30">
                            <div className="bg-white px-8 py-6 rounded-[calc(1.5rem-2px)] text-center">
                                <p className="text-xl md:text-2xl font-bold bg-primary bg-clip-text text-transparent mb-2">
                                    Kein Problem, wir helfen dir gerne weiter!
                                </p>
                                <p className="text-gray-600 font-medium">
                                    Damit dein Zuhause wieder glänzt und strahlt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

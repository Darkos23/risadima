import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

const comiteRedaction = [
    { name: 'Jeanne Koudogbo', role: 'Rédactrice en chef', pays: 'Bénin / Canada', greek: 'α' },
    { name: 'Faïza Chellougui', role: 'Rédactrice en chef', pays: 'Tunisie', greek: 'β' },
    { name: 'Moustapha Sokhna', role: 'Membre du comité de rédaction', pays: 'Sénégal', greek: 'γ' },
    { name: 'Imed Kilani', role: 'Membre du comité de rédaction', pays: 'Tunisie', greek: 'δ' },
    { name: 'Cheick Omar Doumbia', role: 'Membre du comité de rédaction', pays: 'Mali', greek: 'ε' },
    { name: 'Teresa Assude', role: 'Membre du comité de rédaction', pays: 'France', greek: 'ζ' },
    { name: 'Eric Roditi', role: 'Membre du comité de rédaction', pays: 'France', greek: 'η' },
    { name: 'Hassane Squalli', role: 'Membre du comité de rédaction', pays: 'Canada / Maroc', greek: 'θ' },
];

const comiteScientifique = [
    { name: 'Henri Dandjinou', pays: 'Bénin', greek: 'α' },
    { name: 'Judith Sadja-Njomgang', pays: 'Cameroun', greek: 'β' },
    { name: 'Sounkharou Diarra', pays: 'Sénégal', greek: 'γ' },
    { name: 'Adolphe Adihou', pays: 'Bénin / Canada', greek: 'δ' },
    { name: 'Karima Sayah', pays: 'Algérie', greek: 'ε' },
    { name: 'Saïd Abouhanifa', pays: 'Maroc', greek: 'ζ' },
    { name: 'Viviane Durand-Guerrier', pays: 'France', greek: 'η' },
    { name: 'Frédéric Dupré', pays: 'France', greek: 'θ' },
    { name: 'Hourria Hamzaoui', pays: 'Algérie / Canada', greek: 'ι' },
    { name: 'Céline Vendeira-Marechal', pays: 'Suisse', greek: 'κ' },
    { name: 'Virginie Deloustal', pays: 'France', greek: 'λ' },
    { name: 'Abdoul Massalabi Nouhou', pays: 'Niger', greek: 'μ' },
];

export default function Comite() {
    return (
        <MainLayout>
            <Head title="Comité éditorial — RISADiMA" />

            {/* Header */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[14rem] font-serif italic float-anim-slow" style={{ top: '-5%', right: '3%' }}>Σ</span>
                    <span className="absolute text-white/[0.02] text-[9rem] font-serif italic float-anim-delayed" style={{ bottom: '-5%', left: '8%' }}>Ε</span>
                </div>
                <div className="absolute top-0 left-0 right-0 meander-line" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />

                <div className="relative max-w-[1114px] mx-auto px-6 py-14">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#d4a843]/50" />
                        <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em]">
                            Συντακτική Επιτροπή · Corps éditorial
                        </span>
                    </div>
                    <h1 className="font-sans text-[2.25rem] font-bold text-white">Comité éditorial</h1>
                    <p className="font-serif text-[16px] text-gray-400 mt-3 italic max-w-xl">
                        Des spécialistes reconnus en didactique des mathématiques, issus d'institutions d'Afrique et de la francophonie internationale.
                    </p>
                </div>
            </section>

            {/* Comité de rédaction */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-1 h-8 bg-[#d4a843] rounded-full" />
                        <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Comité de rédaction</h2>
                    </div>
                    <p className="font-serif text-[14px] text-gray-500 mb-8 ml-5">
                        Le comité de rédaction est au cœur de la vie de la revue. Il veille à la rigueur et à la qualité scientifique lors du processus de publication : recevabilité – évaluation – acceptation – publication.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {comiteRedaction.map((member, i) => (
                            <div key={i} className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 card-hover greek-corner flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a2e] border border-[#d4a843]/20 flex items-center justify-center num-ring">
                                    <span className="font-serif text-[#d4a843] text-[1.1rem] italic">{member.greek}</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-sans text-[14px] font-bold text-[#1a1a2e] leading-tight">{member.name}</p>
                                    <p className="font-sans text-[11px] font-bold text-[#087acc] uppercase tracking-wider mt-1">{member.role}</p>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        <span className="text-[#d4a843]/60 text-[10px]">◆</span>
                                        <p className="font-serif text-[12px] text-[#6b6050] italic">{member.pays}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comité scientifique */}
            <section className="aged-paper py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-1 h-8 bg-[#087acc] rounded-full" />
                        <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Comité scientifique</h2>
                    </div>
                    <p className="font-serif text-[14px] text-gray-500 mb-8 ml-5">
                        Le comité scientifique est garant et conseiller scientifique du comité de rédaction. Il évalue les articles soumis et veille à la qualité des publications. Au moins 50 % de ses membres sont d'origine africaine.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {comiteScientifique.map((member, i) => (
                            <div key={i} className="bg-white rounded-xl border border-[#c8d8e8]/40 shadow-sm p-5 card-hover flex gap-4 items-center">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#d4a843]/20 flex items-center justify-center">
                                    <span className="font-serif text-[#d4a843] text-[0.95rem] italic">{member.greek}</span>
                                </div>
                                <div>
                                    <p className="font-sans text-[13px] font-bold text-[#1a1a2e]">{member.name}</p>
                                    <p className="font-serif text-[12px] text-gray-400 italic mt-0.5">{member.pays}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Peer review + contact */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl border border-[#c8d8e8]/40 shadow-sm p-7 card-hover">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center">
                                    <span className="font-serif text-[#d4a843] text-lg italic">β</span>
                                </div>
                                <h2 className="font-sans text-[15px] font-bold text-[#1a1a2e]">Évaluation en double aveugle</h2>
                            </div>
                            <p className="font-serif text-[14px] text-gray-600 leading-relaxed">
                                Tous les articles soumis à RISADiMA font l'objet d'une évaluation anonyme par au moins deux experts indépendants. Les résultats sont communiqués aux auteurs sous forme de rapport argumenté. Un troisième expert peut être sollicité en cas d'avis divergents.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl border border-[#c8d8e8]/40 shadow-sm p-7 card-hover">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center">
                                    <span className="font-serif text-[#d4a843] text-lg italic">ε</span>
                                </div>
                                <h2 className="font-sans text-[15px] font-bold text-[#1a1a2e]">Rejoindre le comité</h2>
                            </div>
                            <p className="font-serif text-[14px] text-gray-600 leading-relaxed">
                                Les chercheurs spécialisés en didactique des mathématiques souhaitant rejoindre notre réseau d'experts évaluateurs sont invités à contacter la rédaction.
                            </p>
                            <a
                                href="mailto:contact@risadima.sn"
                                className="font-sans text-[13px] font-semibold text-[#087acc] hover:text-[#065fa1] transition-colors mt-4 inline-flex items-center gap-2"
                            >
                                contact@risadima.sn
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

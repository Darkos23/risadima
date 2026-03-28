import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

const board = [
    {
        name: 'Pr. Moustapha Sokhna',
        role: 'Rédacteur en chef',
        affiliation: 'FASTEF, Université Cheikh Anta Diop, Dakar',
        speciality: 'Didactique des mathématiques',
        email: 'm.sokhna@fastef.ucad.sn',
        greek: 'α',
    },
    {
        name: 'Dr. Issa Doumbia',
        role: 'Rédacteur en chef adjoint',
        affiliation: 'Université Félix Houphouët-Boigny, Abidjan',
        speciality: 'Algèbre et formation des enseignants',
        email: null,
        greek: 'β',
    },
    {
        name: 'Pr. Khalid Benkhalti',
        role: 'Membre du comité scientifique',
        affiliation: 'Université Mohammed V, Rabat, Maroc',
        speciality: 'Épistémologie des mathématiques',
        email: null,
        greek: 'γ',
    },
    {
        name: 'Dr. Fatoumata Bah',
        role: 'Membre du comité scientifique',
        affiliation: 'Université Gamal Abdel Nasser, Conakry',
        speciality: 'Géométrie et didactique',
        email: null,
        greek: 'δ',
    },
    {
        name: 'Pr. Jean-Baptiste Numbi',
        role: 'Membre du comité scientifique',
        affiliation: 'Université de Lubumbashi, RD Congo',
        speciality: 'Arithmétique et théorie des nombres',
        email: null,
        greek: 'ε',
    },
    {
        name: 'Dr. Aminata Kouyaté',
        role: 'Membre du comité scientifique',
        affiliation: 'École Normale Supérieure de Bamako, Mali',
        speciality: 'Technologies éducatives en mathématiques',
        email: null,
        greek: 'ζ',
    },
    {
        name: 'Pr. Hamadou Saliah-Hassane',
        role: 'Membre associé (Canada)',
        affiliation: 'Université du Québec, Montréal',
        speciality: 'STIC et enseignement des sciences',
        email: null,
        greek: 'η',
    },
    {
        name: 'Dr. Rokia Sanogo',
        role: 'Secrétaire de rédaction',
        affiliation: 'FASTEF, Université Cheikh Anta Diop, Dakar',
        speciality: 'Gestion éditoriale et statistiques',
        email: 'r.sanogo@fastef.ucad.sn',
        greek: 'θ',
    },
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
                        Des spécialistes reconnus en didactique des mathématiques et sciences de l'éducation, issus d'institutions d'Afrique et de la francophonie.
                    </p>
                </div>
            </section>

            {/* Board members */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                        {board.map((member, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 card-hover greek-corner flex gap-5"
                            >
                                {/* Greek letter avatar */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a2e] border border-[#d4a843]/20 flex items-center justify-center num-ring">
                                    <span className="font-serif text-[#d4a843] text-[1.1rem] italic">{member.greek}</span>
                                </div>
                                <div className="min-w-0">
                                    <p className="font-sans text-[14px] font-bold text-[#1a1a2e] leading-tight">{member.name}</p>
                                    <p className="font-sans text-[11px] font-bold text-[#087acc] uppercase tracking-wider mt-1">{member.role}</p>
                                    <p className="font-serif text-[12px] text-gray-500 mt-1.5 leading-snug">{member.affiliation}</p>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        <span className="text-[#d4a843]/60 text-[10px]">◆</span>
                                        <p className="font-serif text-[12px] text-[#6b6050] italic">{member.speciality}</p>
                                    </div>
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="font-sans text-[12px] text-[#087acc] hover:text-[#065fa1] hover:underline mt-2 inline-block transition-colors"
                                        >
                                            {member.email}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Peer review note */}
            <section className="aged-paper py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl border border-[#c8d8e8]/40 shadow-sm p-7 card-hover">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center">
                                    <span className="font-serif text-[#d4a843] text-lg italic">β</span>
                                </div>
                                <h2 className="font-sans text-[15px] font-bold text-[#1a1a2e]">Évaluation par les pairs</h2>
                            </div>
                            <p className="font-serif text-[14px] text-gray-600 leading-relaxed">
                                Tous les articles soumis à RISADiMA font l'objet d'une évaluation en <strong>double aveugle</strong> par au moins deux experts indépendants. Le comité de lecture comprend plus de <strong>30 spécialistes</strong> issus d'une vingtaine de pays.
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
                                Les chercheurs spécialisés en didactique des mathématiques ou des sciences souhaitant rejoindre notre réseau de lecteurs experts sont invités à contacter la rédaction.
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

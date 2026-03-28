import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function APropos() {
    return (
        <MainLayout>
            <Head title="La Revue — RISADiMA" />

            {/* Header */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[16rem] font-serif italic float-anim-slow" style={{ top: '-10%', right: '-2%' }}>Π</span>
                    <span className="absolute text-white/[0.02] text-[10rem] font-serif italic float-anim" style={{ bottom: '-5%', left: '5%', animationDelay: '2s' }}>Λ</span>
                </div>
                <div className="absolute top-0 left-0 right-0 meander-line" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />

                <div className="relative max-w-[1114px] mx-auto px-6 py-14">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#d4a843]/50" />
                        <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em]">
                            Περί · Présentation
                        </span>
                    </div>
                    <h1 className="font-sans text-[2.25rem] font-bold text-white">La Revue</h1>
                    <p className="font-serif text-[16px] text-gray-400 mt-3 italic max-w-xl">
                        Mission, histoire et portée de RISADiMA — la revue de l'ADiMA.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-1 h-8 bg-[#d4a843] rounded-full" />
                                <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Mission</h2>
                            </div>
                            <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-8 greek-corner">
                                <p className="font-serif text-[15px] text-[#3a4050] leading-relaxed">
                                    <strong>RISADiMA</strong> — Revue Internationale Scientifique de l'Association de Didactique des Mathématiques d'Afrique — est une revue à dimension francophone et internationale, s'inscrivant en éducation et dans le champ des disciplines scientifiques.
                                </p>
                                <p className="font-serif text-[15px] text-[#3a4050] leading-relaxed mt-4">
                                    La revue vise la publication de travaux de recherche en éducation, précisément ceux touchant <strong>l'enseignement et l'apprentissage des mathématiques</strong> et des disciplines scientifiques, la formation en didactique des mathématiques, menés par des didacticien·nes africain·es ou d'ailleurs.
                                </p>
                                <p className="font-serif text-[15px] text-[#3a4050] leading-relaxed mt-4">
                                    Elle prône le rehaussement du niveau de la qualité des recherches scientifiques et leur promotion pour plus de visibilité. Elle est ouverte aux différentes écoles de pensées et aux approches théoriques et méthodologiques en vigueur dans les sciences de l'éducation et en didactique des mathématiques.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-1 h-8 bg-[#087acc] rounded-full" />
                                <h2 className="font-sans text-[1.25rem] font-bold text-[#1a1a2e]">Informations</h2>
                            </div>
                            {[
                                { label: 'ISSN (imprimé)', value: 'XXXX-XXXX' },
                                { label: 'ISSN (en ligne)', value: 'XXXX-XXXX' },
                                { label: 'Fréquence', value: '2 numéros / an' },
                                { label: 'Langue', value: 'Français (résumés EN)' },
                                { label: 'Accès', value: 'Open Access' },
                                { label: 'Éditeur', value: 'Association ADiMA / FASTEF' },
                            ].map(({ label, value }, i) => (
                                <div key={i} className="bg-white rounded-xl border border-[#c8d8e8]/60 px-5 py-4 shadow-sm flex justify-between items-center">
                                    <span className="font-sans text-[12px] text-gray-500 uppercase tracking-wider">{label}</span>
                                    <span className="font-sans text-[13px] font-semibold text-[#1a1a2e]">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope */}
            <section className="aged-paper py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1 h-8 bg-[#d4a843] rounded-full" />
                        <div>
                            <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Portée et axes thématiques</h2>
                            <p className="font-sans text-[12px] text-gray-400 mt-0.5">Θεματικές περιοχές · Domaines couverts</p>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { greek: 'Δ', title: 'Didactique des mathématiques', desc: 'Enseignement et apprentissage, transposition didactique, ingénierie didactique.' },
                            { greek: 'Σ', title: 'Sciences de l\'éducation', desc: 'Théories de l\'apprentissage, recherches empiriques en contexte africain.' },
                            { greek: 'Φ', title: 'Formation des enseignants', desc: 'Formation initiale et continue, pratiques professionnelles, identité enseignante.' },
                            { greek: 'Ω', title: 'Évaluation', desc: 'Évaluation des apprentissages mathématiques et des dispositifs de formation.' },
                            { greek: 'Θ', title: 'Technologies éducatives', desc: 'Outils numériques, logiciels mathématiques, apprentissage en ligne.' },
                            { greek: 'Ψ', title: 'Épistémologie', desc: 'Histoire des mathématiques, épistémologie des disciplines scientifiques.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-[#c8d8e8]/40 shadow-sm p-6 card-hover geo-reveal">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-sans text-[14px] font-bold text-[#1a1a2e] leading-tight">{item.title}</h3>
                                    <span className="font-serif text-[1.75rem] text-[#d4a843]/25 italic ml-2 flex-shrink-0">{item.greek}</span>
                                </div>
                                <p className="font-serif text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-1 h-8 bg-[#087acc] rounded-full" />
                        <div>
                            <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Historique</h2>
                            <p className="font-sans text-[12px] text-gray-400 mt-0.5">Ιστορία · Genèse de la revue</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a843]/40 via-[#087acc]/20 to-transparent" />
                        <ol className="space-y-6 ml-12">
                            {[
                                { year: '2016', label: '1re conférence ADiMA', desc: 'Création de l\'Association de Didacticiens des Mathématiques Africains (ADiMA) lors de la première conférence au Cameroun.', link: '/actes/adima-1', linkLabel: 'Lire les actes' },
                                { year: '2018', label: 'Décision de créer la revue', desc: 'L\'assemblée générale de l\'ADiMA à Porto-Novo (Bénin) retient la création d\'une revue scientifique comme perspective prioritaire.' },
                                { year: '2021', label: 'Comité de fondation', desc: 'Sur l\'initiative du Pr. Adolphe Adihou, un comité de six membres est créé en juin pour concevoir les statuts et la politique éditoriale.' },
                                { year: '2022', label: '3e conférence ADiMA', desc: 'Rencontre scientifique en Tunisie. Développement des composantes de la revue et désignation des rédactrices en chef.' },
                                { year: '2024', label: 'Validation officielle', desc: 'L\'assemblée générale du Colloque ADiMA4 au Maroc valide le nom définitif : Revue Internationale Scientifique de l\'Association de Didactique des Mathématiques d\'Afrique.' },
                            ].map((item, i) => (
                                <li key={i} className="relative">
                                    <div className="absolute -left-12 w-10 h-10 rounded-full bg-[#1a1a2e] border-2 border-[#d4a843]/30 flex items-center justify-center">
                                        <span className="font-sans text-[9px] font-bold text-[#d4a843] uppercase tracking-wide">{item.year}</span>
                                    </div>
                                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-5 card-hover">
                                        <p className="font-sans text-[13px] font-bold text-[#087acc] uppercase tracking-wider mb-1">{item.label}</p>
                                        <p className="font-serif text-[14px] text-[#3a4050]">{item.desc}</p>
                                        {item.link && (
                                            <Link
                                                href={item.link}
                                                className="inline-flex items-center gap-1.5 mt-3 font-sans text-[12px] font-semibold text-[#d4a843] hover:text-[#c49833] transition-colors"
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                {item.linkLabel}
                                            </Link>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative bg-[#1a1a2e] overflow-hidden">
                <div className="meander-line" />
                <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.03] text-[12rem] font-serif italic" style={{ bottom: '-10%', right: '5%' }}>Ε</span>
                </div>
                <div className="relative max-w-[1114px] mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em] mb-2">Πρόσκληση · Rejoignez-nous</p>
                        <h2 className="font-sans text-[1.5rem] font-bold text-white">Contribuez à la recherche en éducation mathématique</h2>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                        <Link href="/soumissions" className="btn-primary">
                            Soumettre un article
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link href="/comite" className="btn-secondary">Comité éditorial</Link>
                    </div>
                </div>
                <div className="meander-line" />
            </section>
        </MainLayout>
    );
}

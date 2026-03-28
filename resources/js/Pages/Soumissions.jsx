import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

const steps = [
    {
        num: '01', greek: 'α',
        title: 'Préparation du manuscrit',
        desc: 'Rédigez votre article selon les normes de la revue. Anonymisez le document en retirant tout élément d\'identification (nom, affiliation, auto-citations explicites).',
    },
    {
        num: '02', greek: 'β',
        title: 'Soumission en ligne',
        desc: 'Déposez votre manuscrit via la plateforme. Un accusé de réception vous sera envoyé dans les 48 heures ouvrées.',
    },
    {
        num: '03', greek: 'γ',
        title: 'Examen préliminaire',
        desc: 'Le rédacteur en chef vérifie la conformité aux normes et l\'adéquation thématique avant envoi en évaluation. Délai : 1 à 2 semaines.',
    },
    {
        num: '04', greek: 'δ',
        title: 'Évaluation en double aveugle',
        desc: 'Deux experts indépendants évaluent le manuscrit selon des critères scientifiques rigoureux. Délai moyen : 8 à 12 semaines.',
    },
    {
        num: '05', greek: 'ε',
        title: 'Décision et révision',
        desc: 'Le rédacteur en chef notifie la décision : acceptation, révision majeure / mineure ou refus. Les auteurs disposent de 4 semaines pour soumettre une version révisée.',
    },
    {
        num: '06', greek: 'ζ',
        title: 'Publication et DOI',
        desc: 'Après acceptation définitive, l\'article est mis en ligne en accès libre avec attribution d\'un identifiant DOI permanent.',
    },
];

const norms = [
    { label: 'Longueur', value: '6 000 – 9 000 mots (références incluses)' },
    { label: 'Format', value: 'Word (.docx) — Times New Roman 12 pt, interligne 1,5' },
    { label: 'Résumé', value: '150 – 200 mots en français + traduction anglaise' },
    { label: 'Mots-clés', value: '4 à 6 termes, en français et anglais' },
    { label: 'Style bibliographique', value: 'APA 7e édition' },
    { label: 'Tableaux & figures', value: 'Légendés, numérotés, intégrés dans le texte' },
    { label: 'Langue', value: 'Français (anglais accepté pour les auteurs non francophones)' },
    { label: 'Fichiers joints', value: 'Manuscrit + lettre de soumission (format PDF)' },
];

export default function Soumissions() {
    return (
        <MainLayout>
            <Head title="Soumettre un article — RISADiMA" />

            {/* Header */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[14rem] font-serif italic float-anim-slow" style={{ top: '-5%', right: '5%' }}>Υ</span>
                    <span className="absolute text-white/[0.02] text-[10rem] font-serif italic float-anim" style={{ bottom: '-5%', left: '5%', animationDelay: '1s' }}>β</span>
                </div>
                <div className="absolute top-0 left-0 right-0 meander-line" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />

                <div className="relative max-w-[1114px] mx-auto px-6 py-14">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#d4a843]/50" />
                        <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em]">
                            Υποβολή · Instructions aux auteurs
                        </span>
                    </div>
                    <h1 className="font-sans text-[2.25rem] font-bold text-white">Soumettre un article</h1>
                    <p className="font-serif text-[16px] text-gray-400 mt-3 italic max-w-xl">
                        RISADiMA accepte les travaux originaux en didactique des mathématiques, des sciences et de l'éducation. Évaluation en double aveugle, accès libre.
                    </p>
                </div>
            </section>

            {/* Process */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-1 h-8 bg-[#d4a843] rounded-full" />
                        <div>
                            <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Processus de soumission</h2>
                            <p className="font-sans text-[12px] text-gray-400 mt-0.5">Διαδικασία · Étapes de l'évaluation</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 card-hover step-card geo-reveal">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-full bg-[#1a1a2e] flex items-center justify-center flex-shrink-0 num-ring">
                                        <span className="font-serif text-[#d4a843] text-[1rem] italic">{step.greek}</span>
                                    </div>
                                    <span className="font-sans text-[10px] font-bold text-[#087acc] uppercase tracking-[0.2em]">Étape {step.num}</span>
                                </div>
                                <h3 className="font-sans text-[14px] font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
                                <p className="font-serif text-[13px] text-gray-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Norms */}
            <section className="aged-paper py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-1 h-8 bg-[#087acc] rounded-full" />
                                <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Normes de présentation</h2>
                            </div>
                            <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm overflow-hidden">
                                <dl className="divide-y divide-[#e8edf3]">
                                    {norms.map(({ label, value }, i) => (
                                        <div key={i} className="flex gap-4 px-6 py-4 items-baseline hover:bg-[#f8fbff] transition-colors">
                                            <dt className="font-sans text-[12px] text-gray-500 uppercase tracking-wider w-36 flex-shrink-0">{label}</dt>
                                            <dd className="font-serif text-[14px] text-[#3a4050]">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-4">
                            {/* Ethics */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-1 h-8 bg-[#d4a843] rounded-full" />
                                <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Éthique éditoriale</h2>
                            </div>
                            <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-3">
                                {[
                                    'Originalité certifiée — travaux inédits et non soumis ailleurs.',
                                    'Détection systématique du plagiat avant évaluation.',
                                    'Contribution de chaque co-auteur précisée.',
                                    'Déclaration obligatoire des conflits d\'intérêts.',
                                    'Données de recherche disponibles sur demande.',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-[#d4a843] text-[10px] mt-1 flex-shrink-0">◆</span>
                                        <p className="font-serif text-[13px] text-[#3a4050] leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>

                            {/* APC */}
                            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-[#d4a843]/15 relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4a843]/40 to-transparent" />
                                <div className="flex items-start gap-3">
                                    <span className="font-serif text-[#d4a843] text-[1.5rem] italic flex-shrink-0">∅</span>
                                    <div>
                                        <p className="font-sans text-[13px] font-bold text-white">Aucun frais de publication</p>
                                        <p className="font-serif text-[13px] text-gray-400 mt-1 leading-relaxed">
                                            RISADiMA ne perçoit aucun frais (No APC). Soumission et publication entièrement gratuites. Accès libre total.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deadlines + CTA */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-7 card-hover">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-1 h-6 bg-[#d4a843] rounded-full" />
                                <h2 className="font-sans text-[15px] font-bold text-[#1a1a2e] uppercase tracking-wider">Prochaines échéances</h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Vol. 1, N° 2 — Septembre 2026', date: '15 juin 2026' },
                                    { label: 'Vol. 2, N° 1 — Mars 2027', date: '30 novembre 2026' },
                                ].map((d, i) => (
                                    <li key={i} className="flex items-center justify-between gap-4">
                                        <span className="font-serif text-[13px] text-[#3a4050]">{d.label}</span>
                                        <span className="font-sans text-[11px] font-bold text-white bg-[#087acc] px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
                                            {d.date}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#1a1a2e] rounded-xl p-7 card-hover relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4a843]/40 to-transparent" />
                            <span className="absolute bottom-0 right-0 font-serif text-[5rem] text-[#d4a843]/[0.06] italic select-none pointer-events-none">π</span>
                            <p className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em] mb-3">Πρόσκληση · Contactez-nous</p>
                            <h2 className="font-sans text-[1.15rem] font-bold text-white mb-3">Prêt à soumettre ?</h2>
                            <p className="font-serif text-[13px] text-gray-400 mb-6 leading-relaxed">
                                Pour toute question sur le processus ou sur les normes éditoriales, contactez la rédaction.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="#" className="btn-primary text-sm">
                                    Déposer un manuscrit
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <a href="mailto:contact@risadima.sn" className="btn-secondary text-sm">
                                    Nous écrire
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

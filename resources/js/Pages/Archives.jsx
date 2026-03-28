import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Archives({ issues }) {
    return (
        <MainLayout>
            <Head title="Archives — RISADiMA" />

            {/* Header — navy with Greek accents */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[16rem] font-serif italic float-anim-slow" style={{ top: '-10%', right: '0%', '--rot': '5deg' }}>Α</span>
                    <span className="absolute text-white/[0.02] text-[10rem] font-serif italic float-anim" style={{ bottom: '-5%', left: '5%', animationDelay: '1s' }}>Ω</span>
                </div>
                <div className="absolute top-0 left-0 right-0 meander-line" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />

                <div className="relative max-w-[1114px] mx-auto px-6 py-14">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#d4a843]/50" />
                        <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em]">
                            Ἀρχεῖα · Collection complète
                        </span>
                    </div>
                    <h1 className="font-sans text-[2.25rem] font-bold text-white">Archives</h1>
                    <p className="font-serif text-[16px] text-gray-400 mt-3 italic max-w-xl">
                        Tous les numéros publiés par la revue RISADiMA, de la plus récente à la plus ancienne.
                    </p>
                </div>
            </section>

            {/* Issues list on parchment */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    {issues.length > 0 ? (
                        <div className="space-y-5">
                            {issues.map((issue) => (
                                <Link
                                    key={issue.id}
                                    href={`/numeros/${issue.id}`}
                                    className="block bg-white rounded-xl border border-[#c8d8e8]/60 p-6 shadow-md shadow-[#087acc]/5 card-hover group"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-sans text-[11px] font-bold text-white bg-[#087acc] px-2.5 py-1 rounded uppercase tracking-wider">
                                                    Vol. {issue.volume}{issue.number && ` · N° ${issue.number}`}
                                                </span>
                                                {issue.published_at && (
                                                    <span className="font-sans text-[12px] text-[#8a7645]">
                                                        {new Date(issue.published_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                                                    </span>
                                                )}
                                            </div>
                                            <h2 className="font-sans text-[1.25rem] font-bold text-[#1a1a2e] group-hover:text-[#087acc] transition-colors">
                                                {issue.title}
                                            </h2>
                                            {issue.description && (
                                                <p className="font-serif text-[14px] text-[#6b6050] mt-2 max-w-2xl leading-relaxed">
                                                    {issue.description}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 flex-shrink-0 ml-8">
                                            <span className="font-sans text-[13px] font-semibold text-[#087acc] bg-[#087acc]/[0.08] px-4 py-2 rounded-full border border-[#087acc]/10">
                                                {issue.articles_count} article{issue.articles_count > 1 ? 's' : ''}
                                            </span>
                                            <svg className="w-5 h-5 text-[#c4a44a]/40 group-hover:text-[#087acc] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-[#d4c49a]/30">
                            <span className="font-serif text-[3rem] text-[#d4a843]/20 italic">∅</span>
                            <p className="font-serif text-[#8a7645] mt-2">Aucun numéro publié.</p>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}

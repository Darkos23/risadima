import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Article({ article }) {
    return (
        <MainLayout>
            <Head title={`${article.title} — RISADiMA`} />

            {/* Article header — navy with Greek accents */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[18rem] font-serif italic float-anim-slow" style={{ top: '-15%', right: '-5%', '--rot': '5deg' }}>∑</span>
                    <span className="absolute text-[#5ba3d9]/[0.03] text-[12rem] font-serif italic float-anim" style={{ bottom: '-10%', left: '-3%', '--rot': '-3deg', animationDelay: '2s' }}>∂</span>
                    <span className="absolute text-white/[0.02] text-[8rem] font-serif italic float-anim-delayed" style={{ top: '20%', left: '60%' }}>∫</span>
                    {/* Geometric circle */}
                    <svg className="absolute right-[8%] top-[15%] w-[250px] h-[250px] rotate-slow" style={{ animationDuration: '80s' }} viewBox="0 0 250 250" fill="none" strokeWidth="0.5" opacity="0.06">
                        <circle cx="125" cy="125" r="100" stroke="#d4a843" />
                        <circle cx="125" cy="125" r="70" stroke="#5ba3d9" />
                        <polygon points="125,25 220,175 30,175" stroke="#fff" />
                        <line x1="25" y1="125" x2="225" y2="125" stroke="#fff" strokeDasharray="4,4" />
                        <line x1="125" y1="25" x2="125" y2="225" stroke="#fff" strokeDasharray="4,4" />
                    </svg>
                </div>
                {/* Gold accent line top */}
                <div className="absolute top-0 left-0 right-0 meander-line" />
                {/* Gold accent line bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />

                <div className="relative max-w-[900px] mx-auto px-6 pt-10 pb-14">
                    {/* Breadcrumb */}
                    <nav className="font-sans text-[13px] text-white/40 flex items-center gap-2 mb-8">
                        <Link href="/" className="hover:text-[#5ba3d9] transition-colors">Accueil</Link>
                        <span className="text-[#d4a843]/40">›</span>
                        <Link href="/archives" className="hover:text-[#5ba3d9] transition-colors">Archives</Link>
                        <span className="text-[#d4a843]/40">›</span>
                        <Link href={`/numeros/${article.issue.id}`} className="hover:text-[#5ba3d9] transition-colors">
                            Vol. {article.issue.volume}{article.issue.number && `, N° ${article.issue.number}`}
                        </Link>
                    </nav>

                    {/* Category */}
                    {article.keywords && (
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-8 bg-[#d4a843]/50" />
                            <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em]">
                                {article.keywords.split(',')[0].trim()}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="font-sans text-[1.75rem] lg:text-[2.5rem] font-bold text-white leading-[1.15] tracking-tight">
                        {article.title}
                    </h1>

                    {/* Authors */}
                    {article.authors?.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-4">
                            {article.authors.map((author) => (
                                <div key={author.id} className="flex items-center gap-3 bg-white/[0.05] border border-white/[0.08] rounded-full pl-1 pr-4 py-1">
                                    <div className="w-8 h-8 bg-[#087acc]/20 text-[#5ba3d9] rounded-full flex items-center justify-center font-sans text-[12px] font-bold flex-shrink-0">
                                        {author.first_name[0]}{author.last_name[0]}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-sans text-[14px] font-medium text-white/90">
                                            {author.first_name} {author.last_name}
                                        </span>
                                        {author.institution && (
                                            <span className="font-sans text-[12px] text-white/40">
                                                {author.institution}
                                            </span>
                                        )}
                                        {author.orcid && (
                                            <a
                                                href={`https://orcid.org/${author.orcid}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#5ba3d9] hover:text-white transition-colors"
                                            >
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-1.847-1.185-3.722-3.891-3.722h-2.428z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Meta bar */}
                    <div className="mt-8 pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-5 font-sans text-[13px] text-white/40">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#087acc]" />
                            Article de recherche
                        </span>
                        {article.published_at && (
                            <span>
                                Publié le {new Date(article.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        )}
                        {article.pages_start && (
                            <span>pp. {article.pages_start}–{article.pages_end}</span>
                        )}
                        {article.doi && (
                            <a
                                href={`https://doi.org/${article.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#5ba3d9] hover:text-white transition-colors"
                            >
                                DOI : {article.doi}
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Content on parchment */}
            <section className="parchment-bg py-12">
                <div className="max-w-[900px] mx-auto px-6">
                    <div className="bg-white rounded-2xl border border-[#c8d8e8]/60 shadow-lg shadow-[#087acc]/5 overflow-hidden">
                        {/* Gold top bar */}
                        <div className="h-1.5 bg-gradient-to-r from-[#d4a843]/0 via-[#d4a843]/50 to-[#d4a843]/0" />

                        <div className="p-8 lg:p-12">
                            {/* Keywords */}
                            {article.keywords && (
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {article.keywords.split(',').map((kw, i) => (
                                        <span
                                            key={i}
                                            className="font-sans text-[12px] font-semibold text-[#087acc] bg-[#087acc]/[0.08] px-4 py-2 rounded-full border border-[#087acc]/10"
                                        >
                                            {kw.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Abstract */}
                            {article.abstract && (
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="font-serif text-[1.5rem] text-[#d4a843]/40 italic">Σ</span>
                                        <h2 className="font-sans text-[13px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em]">
                                            Résumé
                                        </h2>
                                        <div className="flex-1 h-px bg-[#c8d8e8]/50" />
                                    </div>
                                    <div className="pl-4 border-l-2 border-[#d4a843]/30">
                                        <p className="font-serif text-[16px] text-[#424242] leading-[1.9]">
                                            {article.abstract}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* PDF download */}
                            {article.pdf_path && (
                                <div className="mt-10 pt-8 border-t border-[#c8d8e8]/30">
                                    <a
                                        href={`/storage/${article.pdf_path}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-dark"
                                    >
                                        <svg className="w-5 h-5 text-[#d4a843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Télécharger le PDF
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Gold bottom bar */}
                        <div className="h-1.5 bg-gradient-to-r from-[#d4a843]/0 via-[#d4a843]/50 to-[#d4a843]/0" />
                    </div>

                    {/* Citation block */}
                    <div className="mt-8 bg-[#1a1a2e]/[0.04] border border-[#c8d8e8]/25 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="font-serif text-[#d4a843] italic text-lg">§</span>
                            <h3 className="font-sans text-[12px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em]">Citer cet article</h3>
                        </div>
                        <p className="font-serif text-[13px] text-[#555] leading-relaxed">
                            {article.authors?.map(a => `${a.last_name}, ${a.first_name[0]}.`).join(', ')}{' '}
                            ({article.published_at ? new Date(article.published_at).getFullYear() : '2025'}).{' '}
                            {article.title}.{' '}
                            <em>RISADiMA</em>, {article.issue.volume}
                            {article.issue.number && `(${article.issue.number})`}
                            {article.pages_start && `, ${article.pages_start}–${article.pages_end}`}.
                            {article.doi && ` https://doi.org/${article.doi}`}
                        </p>
                    </div>

                    {/* Back navigation */}
                    <div className="mt-8 flex items-center justify-between">
                        <Link
                            href={`/numeros/${article.issue.id}`}
                            className="font-sans text-[13px] font-semibold text-[#087acc] hover:text-[#065fa1] flex items-center gap-2 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Retour au sommaire
                        </Link>
                        <Link
                            href="/archives"
                            className="font-sans text-[13px] font-semibold text-[#087acc] hover:text-[#065fa1] flex items-center gap-2 transition-colors"
                        >
                            Tous les numéros
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Issue({ issue }) {
    return (
        <MainLayout>
            <Head title={`${issue.title} — RISADiMA`} />

            {/* Header — navy with Greek accents */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[14rem] font-serif italic float-anim-slow" style={{ top: '-10%', right: '3%', '--rot': '3deg' }}>Τ</span>
                    <span className="absolute text-[#5ba3d9]/[0.03] text-[10rem] font-serif italic float-anim" style={{ bottom: '-8%', left: '2%', animationDelay: '2s' }}>Ν</span>
                    <svg className="absolute right-[5%] top-[20%] w-[200px] h-[200px] rotate-slow" style={{ animationDuration: '70s' }} viewBox="0 0 200 200" fill="none" strokeWidth="0.5" opacity="0.05">
                        <circle cx="100" cy="100" r="80" stroke="#d4a843" />
                        <circle cx="100" cy="100" r="50" stroke="#5ba3d9" />
                        <polygon points="100,20 180,140 20,140" stroke="#fff" />
                    </svg>
                </div>
                <div className="absolute top-0 left-0 right-0 meander-line" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />

                <div className="relative max-w-[1114px] mx-auto px-6 py-14">
                    {/* Breadcrumb */}
                    <nav className="font-sans text-[13px] text-white/40 flex items-center gap-2 mb-8">
                        <Link href="/" className="hover:text-[#5ba3d9] transition-colors">Accueil</Link>
                        <span className="text-[#d4a843]/40">›</span>
                        <Link href="/archives" className="hover:text-[#5ba3d9] transition-colors">Archives</Link>
                    </nav>

                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-sans text-[11px] font-bold text-white bg-[#087acc] px-3 py-1.5 rounded uppercase tracking-wider">
                            Vol. {issue.volume}{issue.number && ` · N° ${issue.number}`}
                        </span>
                        {issue.published_at && (
                            <span className="font-sans text-[13px] text-white/40">
                                {new Date(issue.published_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                            </span>
                        )}
                    </div>
                    <h1 className="font-sans text-[2.25rem] font-bold text-white">{issue.title}</h1>
                    {issue.description && (
                        <p className="font-serif text-[16px] text-gray-400 mt-3 max-w-2xl leading-relaxed italic">
                            {issue.description}
                        </p>
                    )}
                </div>
            </section>

            {/* Articles on parchment */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="font-serif text-[1.25rem] text-[#d4a843]/50 italic">Σ</span>
                        <h2 className="font-sans text-[1.1rem] font-bold text-[#1a1a2e] uppercase tracking-wider">Sommaire</h2>
                        <div className="flex-1 h-px bg-[#d4c49a]/40" />
                        <span className="font-sans text-[13px] text-gray-500">
                            {issue.articles?.length || 0} article{(issue.articles?.length || 0) > 1 ? 's' : ''}
                        </span>
                    </div>

                    {issue.articles?.length > 0 ? (
                        <div className="bg-white rounded-2xl border border-[#c8d8e8]/60 shadow-lg shadow-[#087acc]/5 overflow-hidden divide-y divide-[#d4c49a]/30">
                            {/* Gold top bar */}
                            <div className="h-1.5 bg-gradient-to-r from-[#d4a843]/0 via-[#d4a843]/50 to-[#d4a843]/0" />
                            {issue.articles.map((article, index) => (
                                <Link
                                    key={article.id}
                                    href={`/articles/${article.id}`}
                                    className="flex items-start gap-5 p-6 hover:bg-[#f0ebe0] transition-colors group"
                                >
                                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#1a1a2e]/[0.06] text-gray-500 font-sans text-[13px] font-bold flex items-center justify-center group-hover:bg-[#087acc] group-hover:text-white transition-all">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        {article.keywords && (
                                            <span className="font-sans text-[11px] font-semibold text-[#087acc] uppercase tracking-wider">
                                                {article.keywords.split(',')[0].trim()}
                                            </span>
                                        )}
                                        <h3 className="font-sans text-[1rem] font-bold text-[#1a1a2e] leading-snug mt-1 group-hover:text-[#087acc] transition-colors">
                                            {article.title}
                                        </h3>
                                        {article.authors?.length > 0 && (
                                            <p className="font-sans text-[13px] text-gray-500 mt-2">
                                                {article.authors.map((a, i) => (
                                                    <span key={a.id}>
                                                        {i > 0 && <span className="text-gray-300 mx-1">·</span>}
                                                        {a.first_name} {a.last_name}
                                                        {a.institution && (
                                                            <span className="text-gray-400"> ({a.institution})</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </p>
                                        )}
                                        {article.abstract && (
                                            <p className="font-serif text-[13px] text-gray-500 mt-3 leading-relaxed line-clamp-2">
                                                {article.abstract}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-4 mt-3">
                                            <span className="flex items-center gap-1.5 font-sans text-[11px] text-gray-500">
                                                <span className="w-[6px] h-[6px] rounded-full bg-[#087acc]" />
                                                Article de recherche
                                            </span>
                                            {article.pages_start && (
                                                <span className="font-sans text-[11px] text-gray-400">
                                                    pp. {article.pages_start}–{article.pages_end}
                                                </span>
                                            )}
                                            {article.pdf_path && (
                                                <span className="font-sans text-[11px] font-medium text-[#087acc]">
                                                    PDF
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-300 group-hover:text-[#087acc] transition-colors mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-xl border border-[#d4c49a]/30">
                            <span className="font-serif text-[3rem] text-[#d4a843]/20 italic">∅</span>
                            <p className="font-serif text-gray-500 mt-2">Aucun article dans ce numéro.</p>
                        </div>
                    )}

                    {/* Back navigation */}
                    <div className="mt-8">
                        <Link
                            href="/archives"
                            className="font-sans text-[13px] font-semibold text-[#087acc] hover:text-[#065fa1] flex items-center gap-2 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Retour aux archives
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

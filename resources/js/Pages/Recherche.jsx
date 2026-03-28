import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';

export default function Recherche({ query, articles }) {
    const [input, setInput] = useState(query || '');

    function handleSearch(e) {
        e.preventDefault();
        if (input.trim()) {
            router.get('/recherche', { q: input.trim() }, { preserveState: false });
        }
    }

    return (
        <MainLayout>
            <Head title={query ? `"${query}" — Recherche RISADiMA` : 'Recherche — RISADiMA'} />

            {/* Header */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[14rem] font-serif italic float-anim-slow" style={{ top: '-5%', right: '3%' }}>ζ</span>
                </div>
                <div className="absolute top-0 left-0 right-0 meander-line" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />

                <div className="relative max-w-[1114px] mx-auto px-6 py-14">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-[#d4a843]/50" />
                        <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em]">
                            Αναζήτηση · Recherche
                        </span>
                    </div>
                    <h1 className="font-sans text-[2.25rem] font-bold text-white mb-6">
                        {query ? <>Résultats pour <span className="text-[#d4a843]">« {query} »</span></> : 'Recherche'}
                    </h1>

                    {/* Search form */}
                    <form onSubmit={handleSearch} className="flex gap-3 max-w-2xl">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Titre, auteur, mots-clés..."
                            className="flex-1 pl-5 pr-4 py-3 text-[14px] bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-[#d4a843]/60 focus:bg-white/15 transition-all"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[#d4a843] hover:bg-[#c49833] text-[#1a1a2e] font-sans font-bold text-[13px] rounded-lg transition-colors flex-shrink-0"
                        >
                            Rechercher
                        </button>
                    </form>
                </div>
            </section>

            {/* Results */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1114px] mx-auto px-6">
                    {!query ? (
                        <div className="text-center py-20">
                            <span className="font-serif text-[3rem] text-[#d4a843]/20 italic">ζ</span>
                            <p className="font-serif text-[#8a7645] mt-3 text-[15px]">Saisissez un terme pour lancer la recherche.</p>
                        </div>
                    ) : articles.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-xl border border-[#d4c49a]/30">
                            <span className="font-serif text-[3rem] text-[#d4a843]/20 italic">∅</span>
                            <p className="font-serif text-[#8a7645] mt-2 text-[15px]">
                                Aucun article trouvé pour <strong>« {query} »</strong>.
                            </p>
                            <p className="font-sans text-[12px] text-gray-400 mt-1">Essayez avec d'autres mots-clés.</p>
                        </div>
                    ) : (
                        <>
                            <p className="font-sans text-[13px] text-gray-500 mb-6">
                                <span className="font-bold text-[#1a1a2e]">{articles.length}</span> article{articles.length > 1 ? 's' : ''} trouvé{articles.length > 1 ? 's' : ''}
                            </p>
                            <div className="space-y-4">
                                {articles.map((article) => (
                                    <Link
                                        key={article.id}
                                        href={`/articles/${article.id}`}
                                        className="block bg-white rounded-xl border border-[#c8d8e8]/60 p-6 shadow-sm card-hover group"
                                    >
                                        <div className="flex items-start justify-between gap-6">
                                            <div className="min-w-0">
                                                <h2 className="font-sans text-[15px] font-bold text-[#1a1a2e] group-hover:text-[#087acc] transition-colors leading-snug">
                                                    {article.title}
                                                </h2>

                                                {article.authors?.length > 0 && (
                                                    <p className="font-serif text-[13px] text-[#6b6050] italic mt-1.5">
                                                        {article.authors.map(a => a.name).join(', ')}
                                                    </p>
                                                )}

                                                {article.abstract && (
                                                    <p className="font-serif text-[13px] text-gray-500 mt-2 leading-relaxed line-clamp-2">
                                                        {article.abstract}
                                                    </p>
                                                )}

                                                {article.keywords && (
                                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                                        {article.keywords.split(',').map((kw, i) => (
                                                            <span key={i} className="font-sans text-[11px] bg-[#f0f4f8] text-gray-500 px-2 py-0.5 rounded">
                                                                {kw.trim()}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex-shrink-0 text-right">
                                                {article.issue && (
                                                    <span className="font-sans text-[11px] font-bold text-white bg-[#087acc] px-2.5 py-1 rounded uppercase tracking-wider whitespace-nowrap">
                                                        Vol. {article.issue.volume}
                                                        {article.issue.number ? ` · N° ${article.issue.number}` : ''}
                                                    </span>
                                                )}
                                                <svg className="w-5 h-5 text-gray-300 group-hover:text-[#087acc] transition-colors mt-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}

import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function StatCard({ label, value, icon, accent }) {
    return (
        <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 flex items-center gap-4">
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: accent + '18', border: `1px solid ${accent}30` }}
            >
                <span style={{ color: accent }}>{icon}</span>
            </div>
            <div>
                <div className="text-2xl font-bold text-[#1a1a2e]">{value}</div>
                <div className="text-[12px] text-gray-500 font-medium uppercase tracking-wide mt-0.5">{label}</div>
            </div>
        </div>
    );
}

export default function Dashboard({ stats, latestArticles }) {
    const statCards = [
        {
            label: 'Numéros',
            value: stats.issues,
            accent: '#d4a843',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            label: 'Articles',
            value: stats.articles,
            accent: '#087acc',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            label: 'Auteurs',
            value: stats.authors,
            accent: '#5b7fa6',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            label: 'Articles publiés',
            value: stats.articles_published,
            accent: '#2d9d5f',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            label: 'Téléchargements totaux',
            value: stats.total_downloads,
            accent: '#7c3aed',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            ),
        },
    ];

    return (
        <AdminLayout title="Tableau de bord">
            <Head title="Tableau de bord — Admin RISADiMA" />

            {/* Welcome banner */}
            <div className="bg-[#1a1a2e] rounded-xl p-6 mb-6 relative overflow-hidden">
                <div className="absolute right-6 top-0 text-white/4 font-serif text-[100px] leading-none select-none pointer-events-none">Δ</div>
                <div className="relative z-10">
                    <div className="text-[#d4a843] text-[11px] uppercase tracking-widest font-semibold mb-1">Bienvenue</div>
                    <h2 className="text-white font-bold text-[18px]">Administration RISADiMA</h2>
                    <p className="text-white/40 text-[13px] mt-1">Gérez les numéros, articles et auteurs de la revue.</p>
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">
                {statCards.map((card) => (
                    <StatCard key={card.label} {...card} />
                ))}
            </div>

            {/* Latest articles */}
            <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-bold text-[#1a1a2e] text-[14px]">Derniers articles ajoutés</h3>
                    <Link href="/admin/articles" className="text-[12px] text-[#087acc] hover:underline">
                        Voir tous →
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="bg-[#f5f7fa] border-b border-gray-100">
                                <th className="text-left px-6 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Titre</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden md:table-cell">Numéro</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden lg:table-cell">Auteurs</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Statut</th>
                                <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden sm:table-cell">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {latestArticles.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-400 italic">
                                        Aucun article pour l'instant
                                    </td>
                                </tr>
                            )}
                            {latestArticles.map((article, i) => (
                                <tr
                                    key={article.id}
                                    className={`border-b border-gray-50 hover:bg-[#f5f7fa]/80 transition-colors ${i % 2 === 0 ? '' : 'bg-[#fafbfc]'}`}
                                >
                                    <td className="px-6 py-3.5">
                                        <span className="font-medium text-[#1a1a2e] line-clamp-1">{article.title}</span>
                                    </td>
                                    <td className="px-4 py-3.5 hidden md:table-cell text-gray-500">
                                        {article.issue ? `Vol.${article.issue.volume} N°${article.issue.number}` : '—'}
                                    </td>
                                    <td className="px-4 py-3.5 hidden lg:table-cell text-gray-500">
                                        {article.authors || '—'}
                                    </td>
                                    <td className="px-4 py-3.5">
                                        {article.is_published ? (
                                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                                                Publié
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                                                Brouillon
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3.5 hidden sm:table-cell text-gray-400 text-[12px]">
                                        {article.created_at}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

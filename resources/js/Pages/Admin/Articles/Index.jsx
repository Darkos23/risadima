import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function ArticlesIndex({ articles }) {
    const { flash } = usePage().props;

    function handleDelete(id, title) {
        if (!window.confirm(`Supprimer l'article « ${title} » ? Cette action est irréversible.`)) return;
        router.delete(`/admin/articles/${id}`);
    }

    function handleToggle(id) {
        router.patch(`/admin/articles/${id}/toggle-publish`, {}, { preserveScroll: true });
    }

    return (
        <AdminLayout title="Articles">
            <Head title="Articles — Admin RISADiMA" />

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="font-bold text-[#1a1a2e] text-[20px]">Articles</h2>
                    <p className="text-gray-500 text-[13px] mt-0.5">{articles.length} article{articles.length !== 1 ? 's' : ''} au total</p>
                </div>
                <Link
                    href="/admin/articles/create"
                    className="inline-flex items-center gap-2 bg-[#087acc] hover:bg-[#065fa1] text-white text-[13px] font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nouvel article
                </Link>
            </div>

            {flash?.success && (
                <div className="mb-5 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-[13px]">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {flash.success}
                </div>
            )}

            <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm overflow-hidden">
                {articles.length === 0 ? (
                    <div className="py-16 text-center">
                        <div className="text-[#d4a843] font-serif text-5xl mb-4 select-none">Λ</div>
                        <p className="text-gray-400 text-[14px]">Aucun article pour l'instant</p>
                        <Link href="/admin/articles/create" className="inline-block mt-3 text-[#087acc] text-[13px] hover:underline">
                            Ajouter le premier article →
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-[13px]">
                            <thead>
                                <tr className="bg-[#f5f7fa] border-b border-gray-100">
                                    <th className="text-left px-6 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Titre</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden md:table-cell">Numéro</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden lg:table-cell">Auteurs</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden xl:table-cell">Pages</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden xl:table-cell">DL</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Statut</th>
                                    <th className="px-4 py-3 text-right font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article, i) => (
                                    <tr
                                        key={article.id}
                                        className={`border-b border-gray-50 hover:bg-[#f5f7fa]/80 transition-colors ${i % 2 === 0 ? '' : 'bg-[#fafbfc]'}`}
                                    >
                                        <td className="px-6 py-3.5 max-w-xs">
                                            <div className="font-medium text-[#1a1a2e] line-clamp-2 leading-snug">{article.title}</div>
                                            {article.doi && (
                                                <span className="inline-block mt-1 text-[10px] font-mono text-[#087acc] bg-[#087acc]/8 px-1.5 py-0.5 rounded">
                                                    DOI
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3.5 hidden md:table-cell text-gray-500 whitespace-nowrap">
                                            {article.issue
                                                ? `Vol.${article.issue.volume} N°${article.issue.number}`
                                                : <span className="text-gray-300">—</span>}
                                        </td>
                                        <td className="px-4 py-3.5 hidden lg:table-cell">
                                            {article.authors.length > 0 ? (
                                                <div className="flex flex-wrap gap-1">
                                                    {article.authors.slice(0, 2).map(a => (
                                                        <span key={a.id} className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                                            {a.name}
                                                        </span>
                                                    ))}
                                                    {article.authors.length > 2 && (
                                                        <span className="text-[11px] text-gray-400">+{article.authors.length - 2}</span>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-gray-300">—</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3.5 hidden xl:table-cell text-gray-500 whitespace-nowrap">
                                            {article.pages_start && article.pages_end
                                                ? `pp. ${article.pages_start}–${article.pages_end}`
                                                : <span className="text-gray-300">—</span>}
                                        </td>
                                        <td className="px-4 py-3.5 hidden xl:table-cell">
                                            <span className="inline-flex items-center gap-1 text-[11px] text-gray-500">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                {article.downloads_count ?? 0}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <div className="flex items-center gap-2">
                                                {article.is_published ? (
                                                    <span className="text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                                                        Publié
                                                    </span>
                                                ) : (
                                                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                                                        Brouillon
                                                    </span>
                                                )}
                                                <button
                                                    onClick={() => handleToggle(article.id)}
                                                    title={article.is_published ? 'Dépublier' : 'Publier'}
                                                    className="text-gray-400 hover:text-[#087acc] transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <a
                                                    href={`/articles/${article.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Voir sur le site"
                                                    className="inline-flex items-center text-gray-400 hover:text-[#087acc] transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </a>
                                                <Link
                                                    href={`/admin/articles/${article.id}/edit`}
                                                    className="inline-flex items-center gap-1 text-[12px] text-[#087acc] hover:text-[#065fa1] font-medium transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Éditer
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(article.id, article.title)}
                                                    className="inline-flex items-center gap-1 text-[12px] text-red-500 hover:text-red-600 font-medium transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Supprimer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

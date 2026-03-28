import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function AuthorsIndex({ authors }) {
    function handleDelete(id, firstName, lastName) {
        if (!window.confirm(`Supprimer l'auteur « ${firstName} ${lastName} » ? Cette action est irréversible.`)) return;
        router.delete(`/admin/auteurs/${id}`);
    }

    return (
        <AdminLayout title="Auteurs">
            <Head title="Auteurs — Admin RISADiMA" />

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="font-bold text-[#1a1a2e] text-[20px]">Auteurs</h2>
                    <p className="text-gray-500 text-[13px] mt-0.5">{authors.length} auteur{authors.length !== 1 ? 's' : ''} au total</p>
                </div>
                <Link
                    href="/admin/auteurs/create"
                    className="inline-flex items-center gap-2 bg-[#087acc] hover:bg-[#065fa1] text-white text-[13px] font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nouvel auteur
                </Link>
            </div>

            <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm overflow-hidden">
                {authors.length === 0 ? (
                    <div className="py-16 text-center">
                        <div className="text-[#d4a843] font-serif text-5xl mb-4 select-none">Φ</div>
                        <p className="text-gray-400 text-[14px]">Aucun auteur pour l'instant</p>
                        <Link href="/admin/auteurs/create" className="inline-block mt-3 text-[#087acc] text-[13px] hover:underline">
                            Ajouter le premier auteur →
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-[13px]">
                            <thead>
                                <tr className="bg-[#f5f7fa] border-b border-gray-100">
                                    <th className="text-left px-6 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Nom</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden md:table-cell">Email</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden lg:table-cell">Institution</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden xl:table-cell">ORCID</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Articles</th>
                                    <th className="px-4 py-3 text-right font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {authors.map((author, i) => (
                                    <tr
                                        key={author.id}
                                        className={`border-b border-gray-50 hover:bg-[#f5f7fa]/80 transition-colors ${i % 2 === 0 ? '' : 'bg-[#fafbfc]'}`}
                                    >
                                        <td className="px-6 py-3.5">
                                            <div className="font-medium text-[#1a1a2e]">{author.first_name} {author.last_name}</div>
                                        </td>
                                        <td className="px-4 py-3.5 hidden md:table-cell text-gray-500">
                                            {author.email
                                                ? <a href={`mailto:${author.email}`} className="hover:text-[#087acc] transition-colors">{author.email}</a>
                                                : <span className="text-gray-300">—</span>}
                                        </td>
                                        <td className="px-4 py-3.5 hidden lg:table-cell text-gray-500">
                                            {author.institution || <span className="text-gray-300">—</span>}
                                        </td>
                                        <td className="px-4 py-3.5 hidden xl:table-cell">
                                            {author.orcid ? (
                                                <span className="text-[11px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{author.orcid}</span>
                                            ) : (
                                                <span className="text-gray-300">—</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3.5">
                                            <span className="inline-flex items-center justify-center min-w-[28px] h-6 bg-[#087acc]/10 text-[#087acc] text-[11px] font-bold rounded-full px-2">
                                                {author.articles_count}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3.5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/auteurs/${author.id}/edit`}
                                                    className="inline-flex items-center gap-1 text-[12px] text-[#087acc] hover:text-[#065fa1] font-medium transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Éditer
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(author.id, author.first_name, author.last_name)}
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

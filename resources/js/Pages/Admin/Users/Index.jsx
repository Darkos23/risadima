import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function UsersIndex({ users }) {
    const { auth, flash } = usePage().props;

    function handleDelete(id, name) {
        if (!window.confirm(`Supprimer l'utilisateur « ${name} » ?`)) return;
        router.delete(`/admin/utilisateurs/${id}`);
    }

    return (
        <AdminLayout title="Utilisateurs">
            <Head title="Utilisateurs — Admin RISADiMA" />

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="font-bold text-[#1a1a2e] text-[20px]">Utilisateurs</h2>
                    <p className="text-gray-500 text-[13px] mt-0.5">{users.length} utilisateur{users.length !== 1 ? 's' : ''}</p>
                </div>
                <Link
                    href="/admin/utilisateurs/create"
                    className="inline-flex items-center gap-2 bg-[#087acc] hover:bg-[#065fa1] text-white text-[13px] font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nouvel utilisateur
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

            {flash?.error && (
                <div className="mb-5 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-[13px]">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {flash.error}
                </div>
            )}

            <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm overflow-hidden">
                {users.length === 0 ? (
                    <div className="py-16 text-center">
                        <div className="text-[#d4a843] font-serif text-5xl mb-4 select-none">Υ</div>
                        <p className="text-gray-400 text-[14px]">Aucun utilisateur trouvé</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-[13px]">
                            <thead>
                                <tr className="bg-[#f5f7fa] border-b border-gray-100">
                                    <th className="text-left px-6 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Nom</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Email</th>
                                    <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-[11px] hidden sm:table-cell">Créé le</th>
                                    <th className="px-4 py-3 text-right font-semibold text-gray-500 uppercase tracking-wider text-[11px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => (
                                    <tr
                                        key={user.id}
                                        className={`border-b border-gray-50 hover:bg-[#f5f7fa]/80 transition-colors ${i % 2 === 0 ? '' : 'bg-[#fafbfc]'}`}
                                    >
                                        <td className="px-6 py-3.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-[#087acc]/15 border border-[#087acc]/25 flex items-center justify-center text-[#087acc] text-[11px] font-bold select-none flex-shrink-0">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="font-medium text-[#1a1a2e]">{user.name}</span>
                                                {auth?.user?.id === user.id && (
                                                    <span className="text-[10px] font-semibold text-[#d4a843] bg-[#d4a843]/10 border border-[#d4a843]/25 px-1.5 py-0.5 rounded-full">
                                                        Vous
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3.5 text-gray-500">{user.email}</td>
                                        <td className="px-4 py-3.5 hidden sm:table-cell text-gray-400 text-[12px]">
                                            {user.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR') : '—'}
                                        </td>
                                        <td className="px-4 py-3.5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/utilisateurs/${user.id}/edit`}
                                                    className="inline-flex items-center gap-1 text-[12px] text-[#087acc] hover:text-[#065fa1] font-medium transition-colors"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Éditer
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(user.id, user.name)}
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

import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function AuthorForm({ author }) {
    const isEdit = Boolean(author);

    const { data, setData, post, processing, errors } = useForm({
        first_name: author?.first_name ?? '',
        last_name: author?.last_name ?? '',
        email: author?.email ?? '',
        institution: author?.institution ?? '',
        orcid: author?.orcid ?? '',
        _method: isEdit ? 'PUT' : undefined,
    });

    function submit(e) {
        e.preventDefault();
        if (isEdit) {
            post(`/admin/auteurs/${author.id}`, { forceFormData: true });
        } else {
            post('/admin/auteurs', { forceFormData: true });
        }
    }

    return (
        <AdminLayout title={isEdit ? 'Modifier l\'auteur' : 'Nouvel auteur'}>
            <Head title={`${isEdit ? 'Modifier' : 'Nouvel'} auteur — Admin RISADiMA`} />

            <div className="max-w-lg">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
                    <Link href="/admin/auteurs" className="hover:text-[#087acc] transition-colors">Auteurs</Link>
                    <span>/</span>
                    <span className="text-gray-600">{isEdit ? 'Modifier' : 'Nouveau'}</span>
                </div>

                <h2 className="font-bold text-[#1a1a2e] text-[20px] mb-6">
                    {isEdit
                        ? `Modifier ${author.first_name} ${author.last_name}`
                        : 'Nouvel auteur'}
                </h2>

                <form onSubmit={submit}>
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Φ</span>
                            Identité
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                    Prénom <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.first_name}
                                    onChange={e => setData('first_name', e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                    placeholder="Prénom"
                                />
                                {errors.first_name && <p className="text-red-500 text-[11px] mt-1">{errors.first_name}</p>}
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                    Nom <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.last_name}
                                    onChange={e => setData('last_name', e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                    placeholder="Nom de famille"
                                />
                                {errors.last_name && <p className="text-red-500 text-[11px] mt-1">{errors.last_name}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                placeholder="prenom.nom@universite.sn"
                            />
                            {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Institution
                            </label>
                            <input
                                type="text"
                                value={data.institution}
                                onChange={e => setData('institution', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                placeholder="Université Cheikh Anta Diop, Dakar"
                            />
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                ORCID
                            </label>
                            <input
                                type="text"
                                value={data.orcid}
                                onChange={e => setData('orcid', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] font-mono focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                placeholder="0000-0000-0000-0000"
                            />
                            <p className="text-gray-400 text-[11px] mt-1">Identifiant ORCID (optionnel)</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-6">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#087acc] hover:bg-[#065fa1] disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-lg text-[13px] transition-colors"
                        >
                            {processing ? 'Enregistrement...' : isEdit ? 'Mettre à jour' : 'Créer l\'auteur'}
                        </button>
                        <Link
                            href="/admin/auteurs"
                            className="text-[13px] text-gray-500 hover:text-gray-700 transition-colors px-3 py-2.5"
                        >
                            Annuler
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

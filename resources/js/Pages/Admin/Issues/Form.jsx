import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function IssueForm({ issue }) {
    const isEdit = Boolean(issue);

    const { data, setData, post, put, processing, errors } = useForm({
        volume: issue?.volume ?? '',
        number: issue?.number ?? '',
        title: issue?.title ?? '',
        description: issue?.description ?? '',
        published_at: issue?.published_at ?? '',
        is_published: issue?.is_published ?? false,
        cover_image: null,
        _method: isEdit ? 'PUT' : undefined,
    });

    function submit(e) {
        e.preventDefault();
        if (isEdit) {
            post(`/admin/numeros/${issue.id}`, { forceFormData: true });
        } else {
            post('/admin/numeros', { forceFormData: true });
        }
    }

    return (
        <AdminLayout title={isEdit ? 'Modifier le numéro' : 'Nouveau numéro'}>
            <Head title={`${isEdit ? 'Modifier' : 'Nouveau'} numéro — Admin RISADiMA`} />

            <div className="max-w-2xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
                    <Link href="/admin/numeros" className="hover:text-[#087acc] transition-colors">Numéros</Link>
                    <span>/</span>
                    <span className="text-gray-600">{isEdit ? 'Modifier' : 'Nouveau'}</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-bold text-[#1a1a2e] text-[20px]">
                        {isEdit ? `Modifier « ${issue.title} »` : 'Nouveau numéro'}
                    </h2>
                    {isEdit && (
                        <a
                            href={`/numeros/${issue.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[12px] text-[#087acc] hover:underline"
                        >
                            Voir sur le site
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>

                <form onSubmit={submit} className="space-y-6">
                    {/* Vol / Num */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Ν</span>
                            Identification
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                    Volume <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="number"
                                    value={data.volume}
                                    onChange={e => setData('volume', e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                    placeholder="1"
                                />
                                {errors.volume && <p className="text-red-500 text-[11px] mt-1">{errors.volume}</p>}
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                    Numéro <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="number"
                                    value={data.number}
                                    onChange={e => setData('number', e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                    placeholder="1"
                                />
                                {errors.number && <p className="text-red-500 text-[11px] mt-1">{errors.number}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Τ</span>
                            Contenu
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Titre <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                placeholder="Titre du numéro"
                            />
                            {errors.title && <p className="text-red-500 text-[11px] mt-1">{errors.title}</p>}
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Description
                            </label>
                            <textarea
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                rows={4}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all resize-none"
                                placeholder="Description ou éditorial du numéro..."
                            />
                        </div>
                    </div>

                    {/* Publication */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Π</span>
                            Publication
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Date de publication
                            </label>
                            <input
                                type="date"
                                value={data.published_at}
                                onChange={e => setData('published_at', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Image de couverture
                            </label>
                            {issue?.cover_image && (
                                <div className="mb-2">
                                    <img
                                        src={`/storage/${issue.cover_image}`}
                                        alt="Couverture actuelle"
                                        className="h-24 w-auto rounded border border-gray-200 object-cover"
                                    />
                                    <p className="text-[11px] text-gray-400 mt-1">Image actuelle — sélectionner un nouveau fichier pour remplacer</p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={e => setData('cover_image', e.target.files[0])}
                                className="w-full text-[13px] text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-[#087acc]/10 file:text-[#087acc] hover:file:bg-[#087acc]/20 cursor-pointer"
                            />
                            {errors.cover_image && <p className="text-red-500 text-[11px] mt-1">{errors.cover_image}</p>}
                        </div>

                        <div className="flex items-center gap-3 pt-1">
                            <button
                                type="button"
                                role="switch"
                                aria-checked={data.is_published}
                                onClick={() => setData('is_published', !data.is_published)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                    data.is_published ? 'bg-[#087acc]' : 'bg-gray-200'
                                }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                                        data.is_published ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                />
                            </button>
                            <label className="text-[13px] font-medium text-gray-700 cursor-pointer select-none" onClick={() => setData('is_published', !data.is_published)}>
                                {data.is_published ? 'Publié' : 'Brouillon'}
                            </label>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#087acc] hover:bg-[#065fa1] disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-lg text-[13px] transition-colors"
                        >
                            {processing ? 'Enregistrement...' : isEdit ? 'Mettre à jour' : 'Créer le numéro'}
                        </button>
                        <Link
                            href="/admin/numeros"
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

import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useState } from 'react';

export default function ArticleForm({ article, issues, authors }) {
    const isEdit = Boolean(article);

    const { data, setData, post, processing, errors } = useForm({
        title: article?.title ?? '',
        abstract: article?.abstract ?? '',
        keywords: article?.keywords ?? '',
        issue_id: article?.issue_id ?? '',
        doi: article?.doi ?? '',
        pages_start: article?.pages_start ?? '',
        pages_end: article?.pages_end ?? '',
        sort_order: article?.sort_order ?? '',
        is_published: article?.is_published ?? false,
        pdf_path: null,
        author_ids: article?.author_ids ?? [],
        _method: isEdit ? 'PUT' : undefined,
    });

    function submit(e) {
        e.preventDefault();
        if (isEdit) {
            post(`/admin/articles/${article.id}`, { forceFormData: true });
        } else {
            post('/admin/articles', { forceFormData: true });
        }
    }

    function toggleAuthor(id) {
        const current = data.author_ids;
        if (current.includes(id)) {
            setData('author_ids', current.filter(a => a !== id));
        } else {
            setData('author_ids', [...current, id]);
        }
    }

    return (
        <AdminLayout title={isEdit ? 'Modifier l\'article' : 'Nouvel article'}>
            <Head title={`${isEdit ? 'Modifier' : 'Nouvel'} article — Admin RISADiMA`} />

            <div className="max-w-2xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
                    <Link href="/admin/articles" className="hover:text-[#087acc] transition-colors">Articles</Link>
                    <span>/</span>
                    <span className="text-gray-600">{isEdit ? 'Modifier' : 'Nouveau'}</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-bold text-[#1a1a2e] text-[20px]">
                        {isEdit ? `Modifier l'article` : 'Nouvel article'}
                    </h2>
                    {isEdit && (
                        <a
                            href={`/articles/${article.id}`}
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
                    {/* Identification */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Α</span>
                            Informations générales
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
                                placeholder="Titre complet de l'article"
                            />
                            {errors.title && <p className="text-red-500 text-[11px] mt-1">{errors.title}</p>}
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Numéro (revue)
                            </label>
                            <select
                                value={data.issue_id}
                                onChange={e => setData('issue_id', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all bg-white"
                            >
                                <option value="">— Aucun numéro sélectionné —</option>
                                {issues.map(issue => (
                                    <option key={issue.id} value={issue.id}>
                                        Vol.{issue.volume} N°{issue.number} — {issue.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Abstract / Keywords */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Ρ</span>
                            Contenu
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Résumé</label>
                            <textarea
                                value={data.abstract}
                                onChange={e => setData('abstract', e.target.value)}
                                rows={5}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all resize-none"
                                placeholder="Résumé de l'article..."
                            />
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Mots-clés</label>
                            <input
                                type="text"
                                value={data.keywords}
                                onChange={e => setData('keywords', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                placeholder="didactique, mathématiques, Afrique..."
                            />
                            <p className="text-gray-400 text-[11px] mt-1">Séparés par des virgules</p>
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Μ</span>
                            Métadonnées
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">DOI</label>
                            <input
                                type="text"
                                value={data.doi}
                                onChange={e => setData('doi', e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all font-mono"
                                placeholder="10.XXXX/..."
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Page début</label>
                                <input
                                    type="number"
                                    value={data.pages_start}
                                    onChange={e => setData('pages_start', e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                    placeholder="1"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Page fin</label>
                                <input
                                    type="number"
                                    value={data.pages_end}
                                    onChange={e => setData('pages_end', e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                    placeholder="20"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Ordre</label>
                                <input
                                    type="number"
                                    value={data.sort_order}
                                    onChange={e => setData('sort_order', e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all"
                                    placeholder="0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Authors */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Φ</span>
                            Auteurs
                        </h3>
                        {authors.length === 0 ? (
                            <div className="text-center py-4 text-gray-400 text-[13px]">
                                <Link href="/admin/auteurs/create" className="text-[#087acc] hover:underline">
                                    Créer des auteurs d'abord →
                                </Link>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {authors.map(author => {
                                    const selected = data.author_ids.includes(author.id);
                                    return (
                                        <label
                                            key={author.id}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border cursor-pointer transition-all ${
                                                selected
                                                    ? 'border-[#087acc] bg-[#087acc]/5 text-[#087acc]'
                                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                                            }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selected}
                                                onChange={() => toggleAuthor(author.id)}
                                                className="sr-only"
                                            />
                                            <div className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all ${
                                                selected ? 'border-[#087acc] bg-[#087acc]' : 'border-gray-300'
                                            }`}>
                                                {selected && (
                                                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-[13px] font-medium">
                                                {author.first_name} {author.last_name}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        )}
                        {data.author_ids.length > 0 && (
                            <p className="text-[11px] text-gray-400 mt-2">{data.author_ids.length} auteur{data.author_ids.length > 1 ? 's' : ''} sélectionné{data.author_ids.length > 1 ? 's' : ''} — l'ordre correspond à la sélection</p>
                        )}
                    </div>

                    {/* PDF + Publication */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Π</span>
                            Fichier PDF & Publication
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Fichier PDF
                            </label>
                            {article?.pdf_path && (
                                <div className="mb-2 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-[#087acc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <a
                                        href={`/storage/${article.pdf_path}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[12px] text-[#087acc] hover:underline"
                                    >
                                        PDF actuel
                                    </a>
                                    <span className="text-[11px] text-gray-400">— sélectionner un nouveau fichier pour remplacer</span>
                                </div>
                            )}
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={e => setData('pdf_path', e.target.files[0])}
                                className="w-full text-[13px] text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-[#087acc]/10 file:text-[#087acc] hover:file:bg-[#087acc]/20 cursor-pointer"
                            />
                            {errors.pdf_path && <p className="text-red-500 text-[11px] mt-1">{errors.pdf_path}</p>}
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
                            <label
                                className="text-[13px] font-medium text-gray-700 cursor-pointer select-none"
                                onClick={() => setData('is_published', !data.is_published)}
                            >
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
                            {processing ? 'Enregistrement...' : isEdit ? 'Mettre à jour' : 'Créer l\'article'}
                        </button>
                        <Link
                            href="/admin/articles"
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

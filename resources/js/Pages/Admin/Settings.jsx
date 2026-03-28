import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { useEffect } from 'react';

export default function Settings({ settings }) {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        nom_revue:          settings.nom_revue ?? '',
        issn_print:         settings.issn_print ?? '',
        issn_online:        settings.issn_online ?? '',
        langue:             settings.langue ?? '',
        email_contact:      settings.email_contact ?? '',
        adresse:            settings.adresse ?? '',
        institution:        settings.institution ?? '',
        frequence_parution: settings.frequence_parution ?? '',
        acces_libre:        settings.acces_libre === '1' || settings.acces_libre === true,
        frais_publication:  settings.frais_publication ?? '',
    });

    function submit(e) {
        e.preventDefault();
        post('/admin/parametres');
    }

    const fieldClass = 'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all';

    return (
        <AdminLayout title="Paramètres">
            <Head title="Paramètres — Admin RISADiMA" />

            <div className="max-w-2xl">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="font-bold text-[#1a1a2e] text-[20px]">Paramètres de la revue</h2>
                        <p className="text-gray-500 text-[13px] mt-0.5">Configuration générale de la plateforme</p>
                    </div>
                </div>

                {flash?.success && (
                    <div className="mb-5 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-[13px]">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {flash.success}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    {/* Section Identité */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Ι</span>
                            Identité
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Nom de la revue
                            </label>
                            <input
                                type="text"
                                value={data.nom_revue}
                                onChange={e => setData('nom_revue', e.target.value)}
                                className={fieldClass}
                                placeholder="Revue Internationale de..."
                            />
                            {errors.nom_revue && <p className="text-red-500 text-[11px] mt-1">{errors.nom_revue}</p>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                    ISSN print
                                </label>
                                <input
                                    type="text"
                                    value={data.issn_print}
                                    onChange={e => setData('issn_print', e.target.value)}
                                    className={fieldClass + ' font-mono'}
                                    placeholder="0000-0000"
                                />
                            </div>
                            <div>
                                <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                    ISSN en ligne
                                </label>
                                <input
                                    type="text"
                                    value={data.issn_online}
                                    onChange={e => setData('issn_online', e.target.value)}
                                    className={fieldClass + ' font-mono'}
                                    placeholder="0000-0000"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Langue principale
                            </label>
                            <input
                                type="text"
                                value={data.langue}
                                onChange={e => setData('langue', e.target.value)}
                                className={fieldClass}
                                placeholder="Français"
                            />
                        </div>
                    </div>

                    {/* Section Contact */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Κ</span>
                            Contact
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Email de contact
                            </label>
                            <input
                                type="email"
                                value={data.email_contact}
                                onChange={e => setData('email_contact', e.target.value)}
                                className={fieldClass}
                                placeholder="revue@exemple.org"
                            />
                            {errors.email_contact && <p className="text-red-500 text-[11px] mt-1">{errors.email_contact}</p>}
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Adresse postale
                            </label>
                            <textarea
                                value={data.adresse}
                                onChange={e => setData('adresse', e.target.value)}
                                rows={3}
                                className={fieldClass + ' resize-none'}
                                placeholder="BP 0000, Dakar, Sénégal"
                            />
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Institution éditrice
                            </label>
                            <input
                                type="text"
                                value={data.institution}
                                onChange={e => setData('institution', e.target.value)}
                                className={fieldClass}
                                placeholder="FASTEF - Université Cheikh Anta Diop"
                            />
                        </div>
                    </div>

                    {/* Section Politique */}
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Π</span>
                            Politique éditoriale
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Fréquence de parution
                            </label>
                            <input
                                type="text"
                                value={data.frequence_parution}
                                onChange={e => setData('frequence_parution', e.target.value)}
                                className={fieldClass}
                                placeholder="Semestrielle"
                            />
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Frais de publication
                            </label>
                            <input
                                type="text"
                                value={data.frais_publication}
                                onChange={e => setData('frais_publication', e.target.value)}
                                className={fieldClass}
                                placeholder="Gratuit / 50 000 FCFA..."
                            />
                        </div>

                        <div className="flex items-center gap-3 pt-1">
                            <button
                                type="button"
                                role="switch"
                                aria-checked={data.acces_libre}
                                onClick={() => setData('acces_libre', !data.acces_libre)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                    data.acces_libre ? 'bg-[#087acc]' : 'bg-gray-200'
                                }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                                        data.acces_libre ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                                />
                            </button>
                            <label
                                className="text-[13px] font-medium text-gray-700 cursor-pointer select-none"
                                onClick={() => setData('acces_libre', !data.acces_libre)}
                            >
                                Accès libre (Open Access)
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#087acc] hover:bg-[#065fa1] disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-lg text-[13px] transition-colors"
                        >
                            {processing ? 'Enregistrement...' : 'Enregistrer'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

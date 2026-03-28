import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function UserForm({ user }) {
    const isEdit = Boolean(user);

    const { data, setData, post, put, processing, errors } = useForm({
        name:                  user?.name ?? '',
        email:                 user?.email ?? '',
        password:              '',
        password_confirmation: '',
    });

    function submit(e) {
        e.preventDefault();
        if (isEdit) {
            put(`/admin/utilisateurs/${user.id}`);
        } else {
            post('/admin/utilisateurs');
        }
    }

    const fieldClass = 'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 transition-all';

    return (
        <AdminLayout title={isEdit ? 'Modifier l\'utilisateur' : 'Nouvel utilisateur'}>
            <Head title={`${isEdit ? 'Modifier' : 'Nouvel'} utilisateur — Admin RISADiMA`} />

            <div className="max-w-xl">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[12px] text-gray-400 mb-6">
                    <Link href="/admin/utilisateurs" className="hover:text-[#087acc] transition-colors">Utilisateurs</Link>
                    <span>/</span>
                    <span className="text-gray-600">{isEdit ? 'Modifier' : 'Nouveau'}</span>
                </div>

                <h2 className="font-bold text-[#1a1a2e] text-[20px] mb-6">
                    {isEdit ? `Modifier « ${user.name} »` : 'Nouvel utilisateur'}
                </h2>

                <form onSubmit={submit} className="space-y-6">
                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Υ</span>
                            Informations
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Nom <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className={fieldClass}
                                placeholder="Nom complet"
                                autoComplete="name"
                            />
                            {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className={fieldClass}
                                placeholder="admin@exemple.org"
                                autoComplete="email"
                            />
                            {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-[#c8d8e8]/60 shadow-sm p-6 space-y-4">
                        <h3 className="font-semibold text-[#1a1a2e] text-[13px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-[#d4a843] font-serif text-lg">Σ</span>
                            Sécurité
                        </h3>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Mot de passe {!isEdit && <span className="text-red-400">*</span>}
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                className={fieldClass}
                                placeholder={isEdit ? 'Laisser vide pour ne pas changer' : 'Minimum 8 caractères'}
                                autoComplete="new-password"
                            />
                            {errors.password && <p className="text-red-500 text-[11px] mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label className="block text-[12px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                                Confirmer le mot de passe {!isEdit && <span className="text-red-400">*</span>}
                            </label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                                className={fieldClass}
                                placeholder={isEdit ? 'Laisser vide pour ne pas changer' : 'Répéter le mot de passe'}
                                autoComplete="new-password"
                            />
                            {errors.password_confirmation && <p className="text-red-500 text-[11px] mt-1">{errors.password_confirmation}</p>}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#087acc] hover:bg-[#065fa1] disabled:opacity-60 text-white font-semibold px-6 py-2.5 rounded-lg text-[13px] transition-colors"
                        >
                            {processing ? 'Enregistrement...' : isEdit ? 'Mettre à jour' : 'Créer l\'utilisateur'}
                        </button>
                        <Link
                            href="/admin/utilisateurs"
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

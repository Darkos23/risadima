import { useForm, Head } from '@inertiajs/react';

export default function Login({ errors }) {
    const { data, setData, post, processing } = useForm({
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/admin/login');
    }

    return (
        <>
            <Head title="Connexion — Administration RISADiMA" />
            <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center px-4 relative overflow-hidden">
                {/* Decorative Greek letters background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                    <span className="absolute top-8 left-8 text-white/3 font-serif text-[180px] leading-none">Α</span>
                    <span className="absolute bottom-8 right-8 text-white/3 font-serif text-[180px] leading-none">Ω</span>
                    <span className="absolute top-1/2 -translate-y-1/2 left-4 text-white/2 font-serif text-[120px] leading-none">Σ</span>
                    <span className="absolute top-1/2 -translate-y-1/2 right-4 text-white/2 font-serif text-[120px] leading-none">Φ</span>
                </div>

                {/* Gold line top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4a843] to-transparent" />

                <div className="w-full max-w-sm relative z-10">
                    {/* Logo area */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#d4a843]/15 border border-[#d4a843]/30 mb-4">
                            <span className="text-[#d4a843] font-serif text-3xl select-none">Ρ</span>
                        </div>
                        <h1 className="text-white font-bold text-xl font-sans">RISADiMA</h1>
                        <p className="text-white/40 text-[12px] uppercase tracking-wider mt-1">Espace Administration</p>
                    </div>

                    {/* Card */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <h2 className="text-white font-semibold text-[15px] mb-6 text-center">Connexion</h2>

                        {errors?.email && (
                            <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 text-[13px] px-4 py-3 rounded-lg">
                                {errors.email}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label className="block text-white/60 text-[12px] uppercase tracking-wider mb-1.5">
                                    Adresse e-mail
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    autoComplete="email"
                                    required
                                    className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/25 rounded-lg px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/30 transition-all"
                                    placeholder="admin@risadima.sn"
                                />
                            </div>

                            <div>
                                <label className="block text-white/60 text-[12px] uppercase tracking-wider mb-1.5">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    autoComplete="current-password"
                                    required
                                    className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/25 rounded-lg px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/30 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#087acc] hover:bg-[#065fa1] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-[14px] transition-colors mt-2"
                            >
                                {processing ? 'Connexion...' : 'Se connecter'}
                            </button>
                        </form>
                    </div>

                    <p className="text-center text-white/20 text-[11px] mt-6">
                        © {new Date().getFullYear()} RISADiMA — Accès réservé
                    </p>
                </div>
            </div>
        </>
    );
}

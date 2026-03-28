import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function MainLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Accueil' },
        { href: '/archives', label: 'Archives' },
        { href: '/a-propos', label: 'La Revue' },
        { href: '/comite', label: 'Comité éditorial' },
        { href: '/soumissions', label: 'Soumettre un article' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Institutional bar */}
            <div className="bg-[#1a1a2e] text-white/70 text-[11px] tracking-wide">
                <div className="max-w-[1200px] mx-auto px-6 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-white/90">UCAD</span>
                        <span className="text-white/30">|</span>
                        <span>Faculté des Sciences et Technologies de l'Éducation et de la Formation</span>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <span>ISSN : XXXX-XXXX</span>
                        <div className="flex gap-1.5 bg-white/10 rounded px-2 py-0.5">
                            <button className="text-white font-bold">FR</button>
                            <span className="text-white/30">|</span>
                            <button className="hover:text-white">EN</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <header className="bg-white sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <div className="max-w-[1200px] mx-auto px-6">
                    {/* Logo row */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-100">
                        <Link href="/" className="flex-shrink-0">
                            <img src="/images/logo-risadima.png" alt="RISADiMA" className="h-12 w-auto" />
                        </Link>

                        <div className="hidden md:flex items-center gap-3">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Rechercher un article, un auteur..."
                                    className="w-72 pl-4 pr-10 py-2.5 text-[13px] bg-[#f5f7fa] border border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-[#087acc] focus:ring-1 focus:ring-[#087acc]/20 font-sans placeholder:text-gray-400 transition-all"
                                />
                                <svg className="absolute right-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileOpen
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                }
                            </svg>
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className={`${mobileOpen ? 'block' : 'hidden'} md:block`}>
                        <ul className="flex flex-col md:flex-row md:items-center md:-mx-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-3 text-[13px] font-semibold text-gray-700 hover:text-[#087acc] transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#087acc] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="flex-1">{children}</main>

            {/* Greek meander divider */}
            <div className="meander-divider" />

            {/* Footer */}
            <footer className="bg-[#1a1a2e] text-gray-400">
                <div className="max-w-[1200px] mx-auto px-6 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        <div className="md:col-span-5">
                            <img src="/images/logo-risadima.png" alt="RISADiMA" className="h-10 w-auto brightness-0 invert opacity-80" />
                            <p className="font-serif text-[14px] leading-relaxed mt-4 text-gray-500">
                                Revue Internationale Scientifique de l'Association de Didactique
                                des Mathématiques d'Afrique. Publication scientifique à comité de lecture, en accès libre.
                            </p>
                        </div>
                        <div className="md:col-span-3">
                            <h3 className="font-sans text-white text-[13px] font-bold uppercase tracking-wider mb-4">Rubriques</h3>
                            <ul className="space-y-2.5">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-[14px] hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4">
                            <h3 className="font-sans text-white text-[13px] font-bold uppercase tracking-wider mb-4">Éditeur</h3>
                            <ul className="space-y-2 text-[14px]">
                                <li className="text-gray-300 font-medium">Association ADiMA</li>
                                <li>FASTEF, Université Cheikh Anta Diop</li>
                                <li>Dakar-Fann, Sénégal</li>
                                <li className="pt-2">
                                    <a href="mailto:contact@risadima.sn" className="text-[#5ba3d9] hover:text-white transition-colors">
                                        contact@risadima.sn
                                    </a>
                                </li>
                            </ul>
                            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                                <span className="text-[11px] uppercase tracking-wider text-gray-500">Indexation</span>
                                <span className="text-[12px] bg-white/10 text-gray-300 px-2.5 py-1 rounded">DOAJ</span>
                                <span className="text-[12px] bg-white/10 text-gray-300 px-2.5 py-1 rounded">Google Scholar</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between text-[12px] text-gray-600">
                        <p>© {new Date().getFullYear()} RISADiMA — Tous droits réservés</p>
                        <p className="mt-1 md:mt-0">
                            Développé par{' '}
                            <a href="https://korilab.dev" className="text-[#5ba3d9] hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                KoriLab
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

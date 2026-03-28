import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

const navItems = [
    {
        href: '/admin',
        label: 'Tableau de bord',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        href: '/admin/numeros',
        label: 'Numéros',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        href: '/admin/articles',
        label: 'Articles',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        href: '/admin/auteurs',
        label: 'Auteurs',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        href: '/admin/utilisateurs',
        label: 'Utilisateurs',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        href: '/admin/parametres',
        label: 'Paramètres',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

function SidebarLink({ item, currentPath }) {
    const isActive = currentPath === item.href ||
        (item.href !== '/admin' && currentPath.startsWith(item.href));

    return (
        <li>
            <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13.5px] font-medium transition-all ${
                    isActive
                        ? 'bg-[#d4a843]/15 text-[#d4a843] border border-[#d4a843]/25'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
            >
                <span className={isActive ? 'text-[#d4a843]' : 'text-white/40'}>
                    {item.icon}
                </span>
                {item.label}
            </Link>
        </li>
    );
}

export default function AdminLayout({ children, title }) {
    const { url } = usePage();
    const currentPath = url.split('?')[0];
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function handleLogout(e) {
        e.preventDefault();
        router.post('/admin/logout');
    }

    return (
        <div className="min-h-screen flex bg-[#f5f7fa]">
            {/* Overlay mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-[#1a1a2e] flex flex-col z-30 transition-transform duration-200
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
            >
                {/* Logo / Brand */}
                <div className="px-5 py-5 border-b border-white/8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#d4a843]/20 border border-[#d4a843]/30 flex items-center justify-center text-[#d4a843] font-serif font-bold text-sm select-none">
                            Ρ
                        </div>
                        <div>
                            <div className="text-white font-bold text-[14px] leading-none">RISADiMA</div>
                            <div className="text-white/35 text-[10.5px] uppercase tracking-wider mt-0.5">Administration</div>
                        </div>
                    </div>
                </div>

                {/* Decorative Greek letter */}
                <div className="px-5 py-3 border-b border-white/8">
                    <div className="text-white/5 font-serif text-5xl leading-none select-none text-right">Σ</div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 overflow-y-auto">
                    <ul className="space-y-1">
                        {navItems.map((item) => (
                            <SidebarLink key={item.href} item={item} currentPath={currentPath} />
                        ))}
                    </ul>
                </nav>

                {/* Bottom — logout */}
                <div className="px-3 pb-5 pt-3 border-t border-white/8">
                    <div className="flex items-center gap-3 px-3 py-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-[#087acc]/20 border border-[#087acc]/30 flex items-center justify-center text-[#087acc] text-[11px] font-bold select-none">
                            A
                        </div>
                        <span className="text-white/50 text-[12px] truncate">Admin</span>
                    </div>
                    <form onSubmit={handleLogout}>
                        <button
                            type="submit"
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Déconnexion
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
                {/* Top bar */}
                <header className="h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 sticky top-0 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-gray-500 hover:text-gray-700 p-1"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex items-center gap-2 text-[13px]">
                        <span className="text-[#d4a843] font-serif text-base select-none">Α</span>
                        <h1 className="font-bold text-[#1a1a2e] truncate">{title || 'Administration'}</h1>
                    </div>
                    <div className="ml-auto">
                        <Link
                            href="/"
                            className="text-[12px] text-[#087acc] hover:underline"
                            target="_blank"
                        >
                            Voir le site &rarr;
                        </Link>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

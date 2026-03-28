import { Head, Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function ActesAdima1() {
    const pdfUrl = '/documents/actes-adima-1.pdf';

    return (
        <MainLayout>
            <Head title="Actes ADiMA 1 — RISADiMA" />

            {/* Header */}
            <section className="relative overflow-hidden bg-[#1a1a2e]">
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[14rem] font-serif italic float-anim-slow" style={{ top: '-5%', right: '3%' }}>Π</span>
                </div>
                <div className="absolute top-0 left-0 right-0 meander-line" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />

                <div className="relative max-w-[1114px] mx-auto px-6 py-10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-8 bg-[#d4a843]/50" />
                        <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.2em]">
                            Πρακτικά · Actes du colloque
                        </span>
                    </div>
                    <h1 className="font-sans text-[1.75rem] font-bold text-white leading-snug">
                        Actes du 1<sup>er</sup> Colloque ADiMA
                    </h1>
                    <p className="font-serif text-[15px] text-gray-400 mt-2 italic">
                        Cameroun, 2016 — Didactique des mathématiques en Afrique
                    </p>
                    <div className="flex items-center gap-3 mt-5">
                        <Link
                            href="/a-propos"
                            className="font-sans text-[12px] text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            La Revue
                        </Link>
                        <span className="text-white/20">·</span>
                        <a
                            href={pdfUrl}
                            download
                            className="font-sans text-[12px] text-[#d4a843] hover:text-[#e0b84d] transition-colors flex items-center gap-1.5"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Télécharger le PDF
                        </a>
                    </div>
                </div>
            </section>

            {/* PDF Viewer */}
            <section className="bg-[#2a2a3e] flex-1" style={{ minHeight: '80vh' }}>
                <iframe
                    src={pdfUrl}
                    title="Actes du 1er Colloque ADiMA"
                    className="w-full"
                    style={{ height: '85vh', border: 'none', display: 'block' }}
                />
            </section>
        </MainLayout>
    );
}

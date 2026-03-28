import { Link, Head } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Home({ latestIssue }) {
    return (
        <MainLayout>
            <Head title="RISADiMA — Revue Scientifique de l'ADiMA" />

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1a1a2e]">
                    {/* Greek math background elements */}
                    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                        {/* Large Greek letters — animated floating */}
                        <span className="absolute text-[#d4a843]/[0.07] text-[12rem] font-serif italic float-anim" style={{ top: '-8%', right: '2%', '--rot': '0deg', animationDelay: '0s' }}>Σ</span>
                        <span className="absolute text-[#d4a843]/[0.06] text-[14rem] font-serif italic float-anim-slow" style={{ bottom: '-15%', left: '-3%', '--rot': '-3deg', animationDelay: '1s' }}>Ω</span>
                        <span className="absolute text-[#5ba3d9]/[0.06] text-[9rem] font-serif italic float-anim-delayed" style={{ top: '25%', right: '20%', '--rot': '5deg' }}>φ</span>
                        <span className="absolute text-white/[0.04] text-[7rem] font-serif italic float-anim" style={{ top: '50%', left: '45%', '--rot': '-2deg', animationDelay: '3s' }}>λ</span>
                        <span className="absolute text-[#d4a843]/[0.05] text-[6rem] font-serif italic float-anim-slow" style={{ top: '5%', left: '35%', '--rot': '4deg', animationDelay: '0.5s' }}>Δ</span>
                        <span className="absolute text-[#5ba3d9]/[0.05] text-[11rem] font-serif italic float-anim-delayed" style={{ bottom: '0%', right: '30%', '--rot': '-6deg' }}>π</span>
                        <span className="absolute text-white/[0.04] text-[8rem] font-serif italic float-anim" style={{ top: '40%', left: '8%', '--rot': '3deg', animationDelay: '4s' }}>θ</span>

                        {/* Euclid-style geometric constructions — rotating */}
                        <svg className="absolute right-[5%] top-[10%] w-[400px] h-[400px] rotate-slow" viewBox="0 0 400 400" fill="none" strokeWidth="0.6" opacity="0.08">
                            {/* Circles and triangles - Euclidean construction */}
                            <circle cx="200" cy="200" r="150" stroke="#d4a843" />
                            <circle cx="200" cy="200" r="100" stroke="#5ba3d9" />
                            <circle cx="200" cy="200" r="60" stroke="#d4a843" />
                            {/* Inscribed triangle */}
                            <polygon points="200,50 70,290 330,290" stroke="#fff" />
                            {/* Pentagon */}
                            <polygon points="200,55 340,165 290,320 110,320 60,165" stroke="#d4a843" />
                            {/* Diameters */}
                            <line x1="50" y1="200" x2="350" y2="200" stroke="#fff" strokeDasharray="4,4" />
                            <line x1="200" y1="50" x2="200" y2="350" stroke="#fff" strokeDasharray="4,4" />
                        </svg>

                        {/* Golden spiral — rotating reverse */}
                        <svg className="absolute left-[3%] bottom-[5%] w-[300px] h-[300px] rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '90s' }} viewBox="0 0 300 300" fill="none" strokeWidth="1" opacity="0.07">
                            <path d="M150,150 A75,75 0 0,1 225,150 A45,45 0 0,1 180,150 A27,27 0 0,1 207,150 A16,16 0 0,1 191,150 A10,10 0 0,1 201,150" stroke="#d4a843" />
                            {/* Fibonacci rectangles */}
                            <rect x="75" y="75" width="150" height="150" stroke="#d4a843" strokeDasharray="3,3" />
                            <rect x="150" y="75" width="75" height="75" stroke="#d4a843" strokeDasharray="3,3" />
                        </svg>

                        {/* Pythagorean theorem diagram */}
                        <svg className="absolute left-[50%] top-[60%] w-[200px] h-[200px]" viewBox="0 0 200 200" fill="none" strokeWidth="0.8" opacity="0.04">
                            {/* Right triangle */}
                            <polygon points="30,170 170,170 30,50" stroke="#fff" />
                            {/* Squares on sides */}
                            <rect x="30" y="170" width="140" height="30" stroke="#5ba3d9" />
                            <rect x="0" y="50" width="30" height="120" stroke="#d4a843" />
                            {/* a² + b² = c² */}
                            <text x="85" y="195" fill="#d4a843" fontSize="8" opacity="0.8">a² + b² = c²</text>
                        </svg>

                        {/* Mathematician names floating */}
                        <span className="absolute text-white/[0.04] text-[1rem] font-serif italic tracking-[0.3em] uppercase" style={{ top: '3%', left: '8%', transform: 'rotate(-5deg)' }}>Euclide</span>
                        <span className="absolute text-white/[0.03] text-[0.9rem] font-serif italic tracking-[0.3em] uppercase" style={{ top: '92%', right: '15%', transform: 'rotate(3deg)' }}>Archimède</span>
                        <span className="absolute text-white/[0.04] text-[0.85rem] font-serif italic tracking-[0.3em] uppercase" style={{ top: '55%', left: '70%', transform: 'rotate(-8deg)' }}>Pythagore</span>
                        <span className="absolute text-white/[0.03] text-[0.9rem] font-serif italic tracking-[0.3em] uppercase" style={{ top: '30%', left: '3%', transform: 'rotate(4deg)' }}>Thalès</span>
                        <span className="absolute text-white/[0.03] text-[0.8rem] font-serif italic tracking-[0.3em] uppercase" style={{ top: '78%', left: '12%', transform: 'rotate(-3deg)' }}>Hypatie</span>
                        <span className="absolute text-white/[0.04] text-[0.85rem] font-serif italic tracking-[0.3em] uppercase" style={{ top: '15%', left: '60%', transform: 'rotate(6deg)' }}>Ératosthène</span>
                    </div>

                    {/* Meander pattern top */}
                    <div className="absolute top-0 left-0 right-0 meander-line" />
                    {/* Gold accent line bottom — shimmer */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a843] to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] gold-shimmer" />
                </div>

                <div className="relative max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            {/* Laurel + label */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[#d4a843] text-lg">⟨</span>
                                <div className="h-px w-6 bg-[#d4a843]/50" />
                                <span className="font-sans text-[11px] font-bold text-[#d4a843] uppercase tracking-[0.25em]">
                                    Dans la tradition d'Euclide et d'Archimède
                                </span>
                                <div className="h-px w-6 bg-[#d4a843]/50" />
                                <span className="text-[#d4a843] text-lg">⟩</span>
                            </div>
                            <h1 className="font-sans text-[2.5rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                                Revue Internationale{' '}
                                <span className="text-[#5ba3d9]">Scientifique</span>{' '}
                                de l'ADiMA
                            </h1>
                            <p className="font-serif text-[1.1rem] text-gray-400 leading-relaxed mt-6 max-w-xl italic">
                                « Il n'y a pas de chemin royal vers la géométrie »
                                <span className="not-italic text-[#d4a843] text-[0.9rem]"> — Euclide</span>
                            </p>
                            <p className="font-serif text-[0.95rem] text-gray-500 leading-relaxed mt-4 max-w-xl">
                                Didactique des mathématiques et des disciplines scientifiques —
                                recherche, formation et innovation pédagogique en Afrique et dans le monde.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10">
                                <Link href="/archives" className="btn-primary">
                                    Explorer les numéros
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link href="/soumissions" className="btn-secondary">
                                    Soumettre un manuscrit
                                </Link>
                            </div>
                        </div>

                        {/* Stats card with Greek frame */}
                        <div className="lg:col-span-5">
                            <div className="relative bg-white/[0.04] backdrop-blur border border-[#d4a843]/20 rounded-2xl overflow-hidden border-glow pulse-gold">
                                {/* Mini meander top */}
                                <div className="h-2 bg-gradient-to-r from-[#d4a843]/0 via-[#d4a843]/30 to-[#d4a843]/0" />
                                <div className="p-8">
                                    <h3 className="font-sans text-[12px] font-bold text-[#d4a843] uppercase tracking-[0.2em] mb-6 text-center">
                                        ΕΝ ΑΡΙΘΜΟΙΣ · En chiffres
                                    </h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { value: '2025', label: 'Année de création' },
                                            { value: '3', label: 'Articles publiés' },
                                            { value: '4', label: 'Auteurs' },
                                            { value: '3', label: 'Pays contributeurs' },
                                        ].map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <div className="font-serif text-[1.75rem] font-bold text-white italic">{stat.value}</div>
                                                <div className="font-sans text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-5 border-t border-white/[0.08] text-center">
                                        <span className="font-sans text-[12px] font-semibold text-[#4caf50] bg-[#4caf50]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-[#4caf50] rounded-full" />
                                            Open Access
                                        </span>
                                    </div>
                                </div>
                                <div className="h-2 bg-gradient-to-r from-[#d4a843]/0 via-[#d4a843]/30 to-[#d4a843]/0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Greek mathematicians banner — scrolling */}
            <section className="aged-paper py-5 overflow-hidden">
                <div className="flex scroll-names" style={{ width: 'max-content' }}>
                    {[...Array(2)].map((_, setIdx) => (
                        <div key={setIdx} className="flex items-center gap-8 text-[12px] font-sans font-semibold text-[#4a6080] uppercase tracking-[0.3em] px-4">
                            {['Euclide', 'Archimède', 'Pythagore', 'Thalès', 'Hypatie', 'Ératosthène', 'Apollonius', 'Diophante', 'Héron', 'Hipparque'].map((name, i) => (
                                <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                                    <span className="text-[#d4a843]/50">◆</span>
                                    {name}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Latest issue */}
            <section className="parchment-bg py-16">
                <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex items-end justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-8 bg-[#087acc] rounded-full" />
                        <div>
                            <h2 className="font-sans text-[1.5rem] font-bold text-[#1a1a2e]">Dernier numéro</h2>
                            <p className="font-sans text-[13px] text-gray-400 mt-0.5">Τελευταίο τεύχος · Publication la plus récente</p>
                        </div>
                    </div>
                    <Link href="/archives" className="font-sans text-[13px] font-semibold text-[#087acc] hover:underline hidden md:block">
                        Voir tous les numéros →
                    </Link>
                </div>

                {latestIssue ? (
                    <>
                        {/* Issue header */}
                        <div className="bg-white rounded-xl p-6 mb-6 flex items-center justify-between border border-[#c8d8e8]/60 shadow-md shadow-[#087acc]/5">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="font-sans text-[11px] font-bold text-white bg-[#087acc] px-2.5 py-1 rounded uppercase tracking-wider">
                                        Vol. {latestIssue.volume}{latestIssue.number && ` · N° ${latestIssue.number}`}
                                    </span>
                                    {latestIssue.published_at && (
                                        <span className="font-sans text-[13px] text-gray-400">
                                            {new Date(latestIssue.published_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                                        </span>
                                    )}
                                </div>
                                <Link href={`/numeros/${latestIssue.id}`}>
                                    <h3 className="font-sans text-[1.25rem] font-bold text-[#1a1a2e] hover:text-[#087acc] transition-colors mt-2">
                                        {latestIssue.title}
                                    </h3>
                                </Link>
                                {latestIssue.description && (
                                    <p className="font-serif text-[14px] text-gray-500 mt-2 max-w-2xl">{latestIssue.description}</p>
                                )}
                            </div>
                            <Link
                                href={`/numeros/${latestIssue.id}`}
                                className="hidden md:flex items-center gap-2 font-sans text-[13px] font-semibold text-[#087acc] hover:text-[#065fa1] flex-shrink-0 ml-8"
                            >
                                Sommaire
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Articles */}
                        <div className="space-y-4">
                            {latestIssue.articles?.map((article, index) => (
                                <Link
                                    key={article.id}
                                    href={`/articles/${article.id}`}
                                    className="article-card block bg-white rounded-xl p-6 border border-[#c8d8e8]/40 shadow-sm group"
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="flex-shrink-0">
                                            <div className="w-11 h-11 rounded-full bg-[#1a1a2e] text-[#d4a843] font-serif text-[14px] font-bold flex items-center justify-center italic group-hover:bg-[#087acc] group-hover:text-white transition-all duration-300">
                                                {String(index + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-1">
                                                {article.keywords && (
                                                    <span className="font-sans text-[10px] font-bold text-[#087acc] uppercase tracking-[0.15em] bg-[#087acc]/[0.06] px-2.5 py-1 rounded-full">
                                                        {article.keywords.split(',')[0].trim()}
                                                    </span>
                                                )}
                                                {article.pages_start && (
                                                    <span className="font-sans text-[11px] text-gray-400">
                                                        pp. {article.pages_start}–{article.pages_end}
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="font-sans text-[1.05rem] font-bold text-[#1a1a2e] leading-snug mt-2 group-hover:text-[#087acc] transition-colors">
                                                {article.title}
                                            </h4>
                                            {article.authors?.length > 0 && (
                                                <div className="flex items-center gap-2 mt-3">
                                                    {/* Author avatars stacked */}
                                                    <div className="flex -space-x-2">
                                                        {article.authors.map((a) => (
                                                            <div key={a.id} className="w-7 h-7 rounded-full bg-[#1a1a2e]/[0.07] border-2 border-white text-[#1a1a2e] font-sans text-[9px] font-bold flex items-center justify-center">
                                                                {a.first_name[0]}{a.last_name[0]}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <p className="font-sans text-[13px] text-gray-500">
                                                        {article.authors.map(a => `${a.first_name} ${a.last_name}`).join(', ')}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        {/* Arrow with geometric circle */}
                                        <div className="flex-shrink-0 w-9 h-9 rounded-full border border-[#c8d8e8] flex items-center justify-center group-hover:border-[#087acc] group-hover:bg-[#087acc] transition-all duration-300 mt-1">
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20 bg-[#f5f7fa] rounded-xl">
                        <p className="font-serif text-gray-400">Aucun numéro publié pour le moment.</p>
                    </div>
                )}
                </div>
            </section>

            {/* Greek heritage section */}
            <section className="relative bg-[#1a1a2e] overflow-hidden">
                {/* Meander top */}
                <div className="meander-line" />
                <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
                    <span className="absolute text-[#d4a843]/[0.04] text-[15rem] font-serif italic" style={{ top: '-10%', right: '-5%' }}>Π</span>
                    <span className="absolute text-white/[0.02] text-[12rem] font-serif italic" style={{ bottom: '-10%', left: '-3%' }}>∞</span>
                </div>
                <div className="relative max-w-[1200px] mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <span className="font-sans text-[11px] font-bold text-gold-gradient uppercase tracking-[0.25em]">
                            Ἀρχιμήδης · Εὐκλείδης · Πυθαγόρας
                        </span>
                        <h2 className="font-sans text-[1.75rem] font-bold text-white mt-3">
                            Héritiers d'une tradition millénaire
                        </h2>
                        <p className="font-serif text-gray-400 mt-3 max-w-xl mx-auto italic">
                            De la géométrie euclidienne aux défis pédagogiques contemporains,
                            RISADiMA perpétue l'esprit de rigueur des mathématiciens grecs.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                greek: 'Εὐκλείδης',
                                name: 'Euclide',
                                period: 'c. 300 av. J.-C.',
                                desc: 'Père de la géométrie. Ses Éléments ont structuré l\'enseignement des mathématiques pendant deux millénaires.',
                                symbol: '△',
                            },
                            {
                                greek: 'Ἀρχιμήδης',
                                name: 'Archimède',
                                period: 'c. 287–212 av. J.-C.',
                                desc: 'Précurseur du calcul infinitésimal, il a posé les bases de l\'analyse mathématique et de la physique.',
                                symbol: '∮',
                            },
                            {
                                greek: 'Πυθαγόρας',
                                name: 'Pythagore',
                                period: 'c. 570–495 av. J.-C.',
                                desc: 'Son théorème reste le fondement de la géométrie enseignée dans toutes les écoles du monde.',
                                symbol: 'a²+b²=c²',
                            },
                        ].map((figure, i) => (
                            <div key={i} className="relative bg-white/[0.04] border border-[#d4a843]/15 rounded-xl overflow-hidden group hover:border-[#d4a843]/30 transition-all card-hover">
                                <div className="h-1.5 bg-gradient-to-r from-[#d4a843]/0 via-[#d4a843]/40 to-[#d4a843]/0" />
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="font-serif text-[11px] text-[#d4a843]/50 italic">{figure.greek}</span>
                                            <h3 className="font-sans text-[1.1rem] font-bold text-white mt-0.5">{figure.name}</h3>
                                            <span className="font-sans text-[11px] text-gray-500">{figure.period}</span>
                                        </div>
                                        <span className="font-serif text-[1.5rem] text-[#d4a843]/30 italic">{figure.symbol}</span>
                                    </div>
                                    <p className="font-serif text-[13px] text-gray-400 mt-4 leading-relaxed">
                                        {figure.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Meander bottom */}
                <div className="meander-line" />
            </section>

            {/* Call for papers */}
            <section className="aged-paper">
                <div className="max-w-[1200px] mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-6 bg-[#d4a843] rounded-full" />
                                <span className="font-sans text-[12px] font-bold text-[#d4a843] uppercase tracking-[0.15em]">
                                    Πρόσκληση · Appel à contributions
                                </span>
                            </div>
                            <h2 className="font-sans text-[1.75rem] font-bold text-[#1a1a2e] leading-tight">
                                Publiez vos travaux de recherche
                            </h2>
                            <p className="font-serif text-[15px] text-gray-500 mt-4 leading-relaxed">
                                RISADiMA accueille les manuscrits originaux en didactique des mathématiques,
                                sciences de l'éducation et formation des enseignants.
                                Évaluation par les pairs, publication en accès libre.
                            </p>
                            <div className="flex flex-wrap items-center gap-3 mt-8">
                                <Link href="/soumissions" className="btn-dark">
                                    Instructions aux auteurs
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link href="/comite" className="btn-link">
                                    Comité scientifique
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { symbol: 'α', num: '01', title: 'Soumission', desc: 'Manuscrits en français ou anglais' },
                                { symbol: 'β', num: '02', title: 'Peer Review', desc: 'Évaluation en double aveugle' },
                                { symbol: 'γ', num: '03', title: 'Open Access', desc: 'Accès libre et gratuit' },
                                { symbol: 'δ', num: '04', title: 'Indexation', desc: 'Visibilité internationale' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 border border-[#c8d8e8]/40 shadow-sm card-hover group">
                                    <div className="w-11 h-11 bg-[#1a1a2e] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#087acc] transition-all duration-300 group-hover:scale-110">
                                        <span className="font-serif text-[#d4a843] text-lg italic group-hover:text-white transition-colors">{item.symbol}</span>
                                    </div>
                                    <h4 className="font-sans text-[15px] font-bold text-[#1a1a2e]">{item.title}</h4>
                                    <p className="font-sans text-[12px] text-gray-400 mt-1.5 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Domains */}
            <section className="parchment-bg py-14">
                <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-1 h-8 bg-[#087acc] rounded-full" />
                    <h2 className="font-sans text-[1.25rem] font-bold text-[#1a1a2e]">Domaines couverts</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { name: 'Didactique des mathématiques', icon: 'π' },
                        { name: 'Sciences de l\'éducation', icon: 'Σ' },
                        { name: 'Formation des enseignants', icon: 'Φ' },
                        { name: 'Curricula et programmes', icon: 'Δ' },
                        { name: 'Évaluation des apprentissages', icon: 'Ω' },
                        { name: 'Technologies éducatives', icon: 'Θ' },
                        { name: 'Pédagogie universitaire', icon: 'Ψ' },
                        { name: 'Épistémologie des disciplines', icon: 'Λ' },
                        { name: 'Éducation comparée', icon: 'Γ' },
                    ].map((subject, i) => (
                        <a
                            key={subject.name}
                            href="#"
                            className="group bg-white px-5 py-4 rounded-xl transition-all border border-[#c8d8e8]/40 shadow-sm hover:shadow-md hover:border-[#087acc]/25 flex items-center gap-3"
                        >
                            <span className="flex-shrink-0 font-serif text-[#d4a843]/40 text-lg italic group-hover:text-[#087acc]/60 transition-colors">
                                {subject.icon}
                            </span>
                            <span className="font-sans text-[13px] font-medium text-[#3a4a5a] group-hover:text-[#087acc] transition-colors">
                                {subject.name}
                            </span>
                        </a>
                    ))}
                </div>
                </div>
            </section>
        </MainLayout>
    );
}

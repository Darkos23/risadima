export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <header className="bg-blue-900 text-white py-6">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl font-bold">Revue Manager</h1>
                    <p className="text-blue-200 mt-1">Plateforme de gestion de revues académiques</p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        L'alternative moderne à OJS
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Une plateforme simple, rapide et francophone pour gérer vos revues scientifiques.
                    </p>
                </div>
            </main>
        </div>
    );
}

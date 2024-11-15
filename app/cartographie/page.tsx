import Navigation from '../components/Navigation';

export default function CartographiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Cartographie par Drone
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Solutions de cartographie aérienne de haute précision pour l&apos;analyse et la modélisation de terrain
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Cartographie 2D</h3>
              <p className="text-gray-300">
                Création de cartes orthophotographiques précises pour l&apos;analyse de terrain et la planification.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Modélisation 3D</h3>
              <p className="text-gray-300">
                Génération de modèles 3D détaillés pour une visualisation complète de l&apos;environnement.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Analyse de Données</h3>
              <p className="text-gray-300">
                Traitement et analyse des données collectées pour des insights précis et exploitables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Besoin d&apos;une cartographie précise ?</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
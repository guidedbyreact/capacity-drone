import Navigation from '../../components/Navigation';

export default function PhotovoltaiquePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Inspection Photovoltaïque par Drone
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Optimisez la performance de vos installations solaires grâce à notre expertise en inspection thermique
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
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Inspection Thermique</h3>
              <p className="text-gray-300">
                Détectez les anomalies thermiques et les points chauds de vos panneaux solaires pour une maintenance préventive efficace.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Analyse de Performance</h3>
              <p className="text-gray-300">
                Évaluez le rendement de vos installations et identifiez les zones de perte de production pour optimiser votre production &apos;énergie.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Maintenance Préventive</h3>
              <p className="text-gray-300">
                Planifiez vos interventions de maintenance grâce à des rapports détaillés et des recommandations précises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi choisir notre service d&apos;inspection photovoltaïque ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapidité d&apos;Intervention</h3>
                <p className="text-gray-300">Inspection complète de vos installations en un temps record grâce à nos drones.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Précision des Analyses</h3>
                <p className="text-gray-300">Détection précise des anomalies grâce à nos caméras thermiques haute résolution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Optimisez la performance de vos installations solaires</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 
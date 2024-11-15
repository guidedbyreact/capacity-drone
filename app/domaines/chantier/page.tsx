import Navigation from '../../components/Navigation';
export default function ChantierPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <Navigation />
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Suivi de Chantier par Drone
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Une vision complète et détaillée de vos chantiers grâce à nos solutions de surveillance aérienne
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
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Suivi d&apos;Avancement</h3>
              <p className="text-gray-300">
                Documentez précisément l&apos;évolution de vos chantiers avec des prises de vues aériennes régulières et des rapports détaillés.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Inspection de Sécurité</h3>
              <p className="text-gray-300">
                Identifiez rapidement les zones à risque et assurez la conformité de vos installations aux normes de sécurité.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Modélisation 3D</h3>
              <p className="text-gray-300">
                Créez des modèles 3D précis de vos chantiers pour une meilleure planification et un suivi optimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi choisir nos services de suivi de chantier ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Gain de Temps</h3>
                <p className="text-gray-300">Réduisez considérablement le temps nécessaire aux inspections et au suivi de chantier.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Efficacité Accrue</h3>
                <p className="text-gray-300">Optimisez la gestion de vos ressources grâce à une vision globale et détaillée.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Prêt à optimiser le suivi de vos chantiers ?</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Demander un devis
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 
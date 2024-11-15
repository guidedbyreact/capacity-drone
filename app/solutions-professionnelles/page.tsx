import Navigation from '../components/Navigation';

export default function SolutionsProfessionnellesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Solutions Professionnelles par Drone
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Des solutions sur mesure pour répondre à l&apos;ensemble de vos besoins professionnels
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
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Formation sur Mesure</h3>
              <p className="text-gray-300">
                Bénéficiez d&apos;une formation adaptée à vos besoins spécifiques et à votre secteur d&apos;activité.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Conseil &amp; Expertise</h3>
              <p className="text-gray-300">
                Profitez de l&apos;expertise de nos consultants pour optimiser vos opérations par drone.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Solutions Personnalisées</h3>
              <p className="text-gray-300">
                Développement de solutions techniques adaptées à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi choisir nos solutions professionnelles ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expertise Reconnue</h3>
                <p className="text-gray-300">Une équipe d&apos;experts qualifiés à votre service.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Solutions Adaptées</h3>
                <p className="text-gray-300">Des solutions sur mesure pour répondre à vos besoins spécifiques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Besoin d&apos;une solution professionnelle ?</h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
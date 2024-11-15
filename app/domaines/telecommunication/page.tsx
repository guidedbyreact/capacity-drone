import Navigation from '../../components/Navigation';

const DroneSolutionsForTelecom = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Drone Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Télécommunication Visée FH &amp; Jumeaux Numériques Panoramiques 360° par Drone
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              L&apos;utilisation de drones pour capturer des jumeaux numériques panoramiques 360° et effectuer des inspections visées FH présente de nombreux avantages pour l&apos;optimisation des réseaux de télécommunication.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                En savoir plus
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
                Contacter notre équipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FH Targeting Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Télécommunication Visée FH (Fréquences Hautes) par Drone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Alignement précis</h3>
              <p className="text-gray-400">
                Lors de l&apos;installation ou de la maintenance des antennes de télécommunications, un drone peut survoler et inspecter les sites pour assurer un alignement parfait entre les antennes, crucial pour garantir la qualité et la performance des liaisons FH.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Surveillance à distance</h3>
              <p className="text-gray-400">
                Les drones peuvent être utilisés pour inspecter les sites de transmission sans avoir à déployer des équipes sur le terrain, ce qui permet de gagner du temps et de réduire les coûts d&apos;exploitation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Collecte de données</h3>
              <p className="text-gray-400">
                En survolant les sites de manière régulière, les drones peuvent recueillir des données techniques, permettant de détecter d&apos;éventuels problèmes de signal ou de mise en place des équipements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Des solutions drone innovantes pour les réseaux de télécommunication
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            L&apos;inspection par drone et la création de jumeaux numériques panoramiques 360° sont des outils puissants pour les opérateurs de télécommunications souhaitant optimiser la gestion et la maintenance de leurs infrastructures, tout en améliorant la qualité de service et la fiabilité de leurs réseaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              En savoir plus
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneSolutionsForTelecom;
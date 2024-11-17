import Navigation from '../components/Navigation'
import Link from 'next/link';

const TelecomDroneApplications = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Télécommunication Drone Inspection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 inline-block bg-gradient-to-r from-blue-600 to-blue-400 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Télécommunication Visée FH & Jumeaux Numériques Panoramiques 360° par Drone
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              La télécommunication visée FH (Fréquences Hautes) et la création de jumeaux numériques panoramiques à 360° par drone sont des technologies avancées qui permettent d&apos;optimiser l&apos;infrastructure des réseaux de télécommunications et de faciliter la gestion et la maintenance des sites.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir les solutions
              </button>
              <Link 
                href="/devis" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <a href="#process" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="animate-bounce bg-white/10 backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </a>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Comment fonctionne la télécommunication par drone ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Alignement précis</h3>
              <p className="text-gray-400">
                Lors de l&apos;installation ou de la maintenance des antennes de télécommunications, un drone équipé de caméras et de capteurs peut survoler et inspecter les sites de manière à assurer un alignement parfait entre les antennes. Cela est crucial pour garantir la qualité et la performance des liaisons FH.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Surveillance à distance</h3>
              <p className="text-gray-400">
                Les drones peuvent être utilisés pour inspecter les sites de transmission sans avoir à déployer des équipes sur le terrain, ce qui permet de gagner du temps et de réduire les coûts d&apos;exploitation.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Collecte de données</h3>
              <p className="text-gray-400">
                En survolant les sites de manière régulière, les drones peuvent recueillir des données techniques, permettant de détecter d&apos;éventuels problèmes de signal ou de mise en place des équipements.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Captation complète de l&apos;environnement</h3>
              <p className="text-gray-400">
                Les drones équipés de caméras 360° prennent des images et des vidéos de toute la zone d&apos;intérêt, créant ainsi un modèle numérique en trois dimensions de l&apos;ensemble du site.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Visualisation et analyse</h3>
              <p className="text-gray-400">
                Ce modèle peut être utilisé pour explorer le site de manière virtuelle, inspecter des installations et analyser des zones difficiles d&apos;accès à partir d&apos;un simple ordinateur ou d&apos;un casque VR (réalité virtuelle). Les jumeaux numériques permettent également de superposer des données techniques pour une analyse approfondie.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Suivi à long terme</h3>
              <p className="text-gray-400">
                Ces modèles permettent de suivre l&apos;évolution d&apos;un site dans le temps, de détecter les changements, d&apos;identifier les risques potentiels et de planifier les futures interventions de manière plus informée et ciblée.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Amélioration de la gestion des infrastructures</h3>
              <p className="text-gray-400">
                Grâce aux jumeaux numériques, les gestionnaires de réseaux peuvent avoir une vue complète et détaillée des sites de télécommunication. Cela facilite la gestion de la maintenance, l&apos;optimisation des installations et l&apos;identification rapide des besoins en réparation ou en mise à jour.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Précision dans l&apos;installation des équipements</h3>
              <p className="text-gray-400">
                La prise de vues 360° permet de visualiser l&apos;alignement des antennes et des équipements de transmission, garantissant une qualité de service optimale pour les connexions FH.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Maintenance prédictive</h3>
              <p className="text-gray-400">
                En superposant les données des drones avec des informations en temps réel et historiques, les opérateurs peuvent mieux anticiper les pannes ou les défaillances, réduisant ainsi les coûts de maintenance et améliorant la fiabilité du réseau.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Optimisation du déploiement</h3>
              <p className="text-gray-400">
                Lors de l&apos;installation de nouvelles antennes ou d&apos;extensions de réseaux, la visualisation panoramique 360° permet de planifier l&apos;emplacement des équipements en tenant compte de l&apos;environnement exact et des conditions sur le terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Avantages de l&apos;Utilisation de Drones pour ces Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Efficacité accrue</h3>
              <p className="text-gray-400">
                Les drones permettent de couvrir de grandes zones rapidement et de capturer des données très précises sans mobiliser une équipe sur le terrain.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Réduction des coûts</h3>
              <p className="text-gray-400">
                Moins de besoin de matériel lourd (comme les nacelles ou les échafaudages) et moins de personnel requis pour les inspections de sites éloignés ou en hauteur.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Accessibilité</h3>
              <p className="text-gray-400">
                Les drones permettent d&apos;accéder facilement à des zones difficiles ou dangereuses pour l&apos;homme, comme les toits, les pylônes ou les sites isolés.
              </p>
            </div>
            <div className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Données de haute qualité</h3>
              <p className="text-gray-400">
                Les drones peuvent être équipés de caméras haute résolution, de capteurs thermiques et d&apos;autres technologies pour fournir des données précises et détaillées, garantissant ainsi une meilleure qualité d&apos;analyse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Des Solutions Complètes pour les Télécommunications
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            L&apos;inspection par drone et la création de jumeaux numériques panoramiques 360° sont des outils puissants pour les opérateurs de télécommunications souhaitant optimiser la gestion et la maintenance de leurs infrastructures. Grâce à ces technologies, les entreprises peuvent améliorer la qualité de service et garantir la pérennité de leurs installations, tout en restant compétitives dans un secteur en constante évolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Découvrir les solutions
            </button>
            <Link 
              href="/devis" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelecomDroneApplications;

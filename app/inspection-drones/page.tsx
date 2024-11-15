import Navigation from '../components/Navigation';

export default function InspectionDronesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-32 mb-16">
        <div className="absolute inset-0 z-0 bg-blue-900/20">
          <img
            src="/api/placeholder/1920/600"
            alt="Drone en inspection"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Inspections par Drone
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une technique moderne permettant d&apos;effectuer des vérifications visuelles et techniques sur des structures ou des sites difficiles d&apos;accès.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {/* Article Section */}
            <article className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-blue-400 mb-8">
                L&apos;inspection par drone en détail
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                L&apos;inspection par drone est une technique moderne permettant d&apos;effectuer des vérifications visuelles et techniques sur des structures ou des sites difficiles d&apos;accès, tout en garantissant une sécurité accrue et des coûts réduits. Cette méthode s&apos;appuie sur des drones équipés de caméras haute définition pour réaliser des inspections précises et détaillées.
              </p>

              <h3 className="text-2xl font-bold text-blue-300 mt-12 mb-6">
                Comment fonctionne l&apos;inspection par drone ?
              </h3>
              
              <div className="bg-gray-800/50 p-6 rounded-xl mb-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">1.</span>
                  <div>
                    <h4 className="text-blue-300 font-semibold">Préparation du vol</h4>
                    <p className="text-gray-400">Avant l&apos;inspection, un plan de vol est établi pour déterminer les zones à survoler, la hauteur de vol et les angles de prise de vue nécessaires.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">2.</span>
                  <div>
                    <h4 className="text-blue-300 font-semibold">Lancement du drone</h4>
                    <p className="text-gray-400">Le drone est lancé pour survoler la structure ou la zone à inspecter, tout en suivant le parcours défini. En fonction de l&apos;équipement à bord (caméra HD, caméra thermique, capteurs), il capte des images ou des vidéos en temps réel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">3.</span>
                  <div>
                    <h4 className="text-blue-300 font-semibold">Collecte des données</h4>
                    <p className="text-gray-400">Les images et vidéos sont transmises en direct au technicien au sol ou stockées pour une analyse ultérieure. Si des capteurs thermiques sont utilisés, des anomalies de température peuvent être détectées.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">4.</span>
                  <div>
                    <h4 className="text-blue-300 font-semibold">Analyse des résultats</h4>
                    <p className="text-gray-400">Les données collectées sont analysées pour détecter des signes de dégradation, des anomalies ou des besoins d&apos;entretien.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">5.</span>
                  <div>
                    <h4 className="text-blue-300 font-semibold">Rapport détaillé</h4>
                    <p className="text-gray-400">Un rapport d&apos;inspection est généré, incluant les images, vidéos et toute autre information pertinente.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-blue-300 mt-12 mb-6">
                Avantages de l&apos;inspection par drone
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Accès aux zones difficiles",
                    description: "Les drones permettent d&apos;inspecter des structures souvent inaccessibles ou dangereuses."
                  },
                  {
                    title: "Sécurité accrue",
                    description: "Réduction des risques liés aux travaux en hauteur et protection des équipes."
                  },
                  {
                    title: "Rapidité d&apos;exécution",
                    description: "Inspection rapide de grandes surfaces ou zones complexes."
                  },
                  {
                    title: "Coût optimisé",
                    description: "Réduction du personnel nécessaire et des équipements lourds."
                  }
                ].map((advantage, index) => (
                  <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
                    <h4 className="text-blue-300 font-semibold mb-2">{advantage.title}</h4>
                    <p className="text-gray-400">{advantage.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-blue-300 mt-12 mb-6">
                Applications courantes
              </h3>

              <div className="bg-gray-800/50 p-6 rounded-xl space-y-4 mb-8">
                {[
                  "Bâtiments et infrastructures : Inspection de toitures, façades, ponts, chemins de fer, viaducs, tunnels.",
                  "Énergie : Surveillance des éoliennes, des lignes électriques et des panneaux solaires.",
                  "Télécommunications : Vérification des antennes relais et des pylônes.",
                  "Industrie pétrolière et gazière : Inspection des pipelines, réservoirs, raffineries.",
                  "Agriculture : Surveillance des cultures et des équipements agricoles.",
                  "Environnement : Surveillance des barrages, des digues, des forêts."
                ].map((app, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-blue-400">•</span>
                    <p className="text-gray-400">{app}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-blue-300 mt-12 mb-6">
                Conclusion
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                L&apos;inspection par drone est une méthode efficace, rapide et sécuritaire pour effectuer des contrôles réguliers et des évaluations détaillées de divers types de structures. Grâce à cette technologie, les entreprises peuvent réduire les coûts d&apos;entretien, détecter les problèmes à un stade précoce, et garantir une gestion proactive de leurs infrastructures.
              </p>
            </article>

            {/* CTA Section */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-blue-500/20 text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Prêt à moderniser vos inspections ?
              </h3>
              <p className="text-gray-300 mb-6">
                Découvrez comment nos solutions d&apos;inspection par drone peuvent transformer votre approche.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
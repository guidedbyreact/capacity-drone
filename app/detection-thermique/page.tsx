import React from 'react';
import Navigation from '../components/Navigation';

const DetectionThermiquePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      {/* Hero Section avec vidéo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Double gradient overlay - bleu et touches de rouge */}
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-blue-900/50 to-black">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-900/10 to-transparent"></div>
          </div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Détection
              </span>
              {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                Thermique
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Nos drones équipés de capteurs thermiques de pointe détectent les anomalies invisibles 
              à l&apos;œil nu pour une maintenance préventive optimale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                Découvrir nos services
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-orange-500/20">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Nos Solutions Thermiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Audit Énergétique",
                description: "Identification des pertes thermiques et optimisation de l'efficacité énergétique de vos bâtiments.",
                details: [
                  "Détection des fuites de chaleur",
                  "Analyse de l'isolation",
                  "Bilans énergétiques",
                  "Recommandations d'amélioration"
                ]
              },
              {
                title: "Maintenance Prédictive",
                description: "Détection précoce des anomalies pour prévenir les pannes et optimiser la maintenance.",
                details: [
                  "Surveillance des équipements",
                  "Détection des surchauffes",
                  "Analyse des défaillances",
                  "Planification maintenance"
                ]
              },
              {
                title: "Sécurité & Prévention",
                description: "Surveillance thermique pour la prévention des risques et la sécurité des installations.",
                details: [
                  "Détection points chauds",
                  "Prévention incendie",
                  "Surveillance process",
                  "Alertes en temps réel"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-blue-300 group-hover:text-orange-300 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Bâtiments & Construction",
                description: "Optimisation énergétique et contrôle qualité des constructions.",
                applications: [
                  "Audits énergétiques",
                  "Contrôle isolation thermique",
                  "Détection infiltrations",
                  "Certification bâtiments"
                ]
              },
              {
                title: "Industrie & Production",
                description: "Surveillance des processus industriels et maintenance prédictive.",
                applications: [
                  "Contrôle équipements",
                  "Surveillance process",
                  "Maintenance prédictive",
                  "Optimisation production"
                ]
              },
              {
                title: "Énergie & Utilities",
                description: "Inspection des installations électriques et énergétiques.",
                applications: [
                  "Inspection panneaux solaires",
                  "Contrôle installations",
                  "Détection défauts",
                  "Optimisation rendement"
                ]
              },
              {
                title: "Sécurité & Surveillance",
                description: "Détection des risques et surveillance thermique.",
                applications: [
                  "Prévention incendie",
                  "Surveillance périmétrique",
                  "Détection intrusion",
                  "Gestion urgences"
                ]
              }
            ].map((app, index) => (
              <div key={index} className="group p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-3 text-blue-300 group-hover:text-orange-300 transition-colors">{app.title}</h3>
                    <p className="text-gray-400 mb-4">{app.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {app.applications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Caractéristiques Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                value: "0.05°C",
                label: "Sensibilité Thermique",
                detail: "Détection ultra-précise"
              },
              {
                value: "640x512",
                label: "Résolution",
                detail: "Imagerie haute définition"
              },
              {
                value: "-20 à 550°C",
                label: "Plage de mesure",
                detail: "Large spectre d'analyse"
              },
              {
                value: "±2%",
                label: "Précision",
                detail: "Mesures fiables"
              }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-6 bg-gradient-to-br from-blue-500/5 to-orange-500/5 rounded-xl hover:from-blue-500/10 hover:to-orange-500/10 transition-all">
                <div className="text-2xl font-bold text-blue-300 group-hover:text-orange-300 transition-colors">{stat.value}</div>
                <div className="text-gray-400 font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Notre Processus</h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Analyse des besoins",
                description: "Évaluation détaillée de vos exigences",
                details: "Définition des objectifs, choix des capteurs, planification intervention"
              },
              {
                step: "02",
                title: "Acquisition",
                description: "Capture des données thermiques",
                details: "Vol drone, acquisition images thermiques, mesures température"
              },
              {
                step: "03",
                title: "Analyse",
                description: "Traitement des données thermiques",
                details: "Analyse anomalies, cartographie thermique, identification problèmes"
              },
              {
                step: "04",
                title: "Rapport",
                description: "Livraison des résultats",
                details: "Rapport détaillé, recommandations, plan d'action"
              }
            ].map((process, index) => (
              <div key={index} className="group flex items-center gap-6 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">{process.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 group-hover:text-orange-300 transition-colors">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                  <p className="text-gray-500 mt-2 text-sm">{process.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
              Optimisez votre efficacité énergétique
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Découvrez comment nos solutions de détection thermique peuvent améliorer
            votre maintenance préventive et réduire vos coûts énergétiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Demander un audit
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-orange-500/20">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetectionThermiquePage;
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
const SecurityEmergencyPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        <Navigation />
      {/* Hero Section avec vidéo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Vidéo en arrière-plan */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        {/* Contenu du hero */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Sécurité & Intervention d'Urgence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Nos drones sont parfaitement adaptés pour surveiller des événements en temps réel, intervenir après des catastrophes naturelles ou des incidents industriels.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
                Découvrir nos services
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-blue-400">Nos Services de Sécurité & Intervention</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Surveillance en Temps Réel",
                description: "Suivi et surveillance d'événements, de manifestations ou de zones sensibles.",
                details: [
                  "Images et vidéos haute définition",
                  "Détection d'anomalies et d'incidents",
                  "Cartographie des zones d'intérêt",
                  "Géolocalisation et reconnaissance faciale"
                ]
              },
              {
                title: "Gestion de Crise",
                description: "Aide à l'intervention et au secours en cas de catastrophes naturelles ou d'accidents industriels.",
                details: [
                  "Évaluation des dommages et des risques",
                  "Recherche et localisation de victimes",
                  "Acheminement de secours et de ravitaillement",
                  "Suivi de l'évolution de la situation"
                ]
              },
              {
                title: "Sécurité Civile",
                description: "Soutien aux forces de l'ordre et aux pompiers lors d'interventions complexes.",
                details: [
                  "Repérage et surveillance des zones à risque",
                  "Guidage et coordination des équipes au sol",
                  "Transmission d'informations en temps réel",
                  "Analyses et cartographies de situation"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
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
                title: "Sécurité Événementielle",
                description: "Surveillance et coordination lors d'événements publics et de manifestations.",
                applications: [
                  "Concerts et festivals",
                  "Événements sportifs",
                  "Défilés et parades",
                  "Surveillance de foule"
                ]
              },
              {
                title: "Gestion de Crise",
                description: "Intervention et soutien dans les situations d'urgence et de catastrophes.",
                applications: [
                  "Catastrophes naturelles",
                  "Incidents industriels",
                  "Recherche et sauvetage",
                  "Acheminement des secours"
                ]
              },
              {
                title: "Sécurité Civile",
                description: "Aide aux forces de l'ordre et aux pompiers lors d'opérations complexes.",
                applications: [
                  "Lutte contre les incendies",
                  "Démantèlement d'explosifs",
                  "Surveillance des frontières",
                  "Opérations de maintien de l'ordre"
                ]
              },
              {
                title: "Sécurité Urbaine",
                description: "Surveillance et sécurisation des zones urbaines sensibles.",
                applications: [
                  "Protection des sites stratégiques",
                  "Suivi des activités illégales",
                  "Prévention de la criminalité",
                  "Gestion des trafics routiers"
                ]
              }
            ].map((app, index) => (
              <div key={index} className="p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">{app.title}</h3>
                <p className="text-gray-400 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.applications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5 text-blue-400 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
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
                value: "4K",
                label: "Qualité Vidéo",
                detail: "Images ultra-haute définition"
              },
              {
                value: "5km",
                label: "Portée",
                detail: "Couverture étendue des zones d'intervention"
              },
              {
                value: "45min",
                label: "Autonomie",
                detail: "Durée d'intervention prolongée"
              },
              {
                value: "Thermique",
                label: "Capteurs",
                detail: "Détection des sources de chaleur"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-all">
                <div className="text-2xl font-bold text-blue-300 mb-2">{stat.value}</div>
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
                title: "Planification",
                description: "Évaluation des besoins et définition du plan d'action",
                details: "Analyse de la situation, identification des priorités, choix des équipements appropriés"
              },
              {
                step: "02",
                title: "Intervention",
                description: "Déploiement des drones pour la surveillance et l'intervention",
                details: "Suivi en temps réel, détection des incidents, guidage des équipes au sol"
              },
              {
                step: "03",
                title: "Coordination",
                description: "Transmission d'informations et soutien aux forces de l'ordre",
                details: "Cartographie de la situation, alertes et notifications, assistance aux opérations de secours"
              },
              {
                step: "04",
                title: "Retour d'Expérience",
                description: "Analyse des interventions et amélioration continue",
                details: "Évaluation des performances, identification des points de progrès, mise à jour des procédures"
              }
            ].map((process, index) => (
              <div key={index} className="flex items-center gap-6 p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="text-4xl font-bold text-blue-400">{process.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">{process.title}</h3>
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
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Renforcez votre sécurité avec nos services
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Nos drones vous offrent une solution innovante pour sécuriser vos événements, gérer vos crises et soutenir vos équipes d'intervention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Demander un devis
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all">
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityEmergencyPage;

import React from 'react';
import { FileText, BookOpen, Shield, Phone, AlertTriangle, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Déposer une plainte",
      description: "Signalez un problème de consommation ou une pratique commerciale déloyale",
      link: "/complaint",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: BookOpen,
      title: "Consulter la réglementation",
      description: "Accédez aux textes de loi et réglementations en vigueur",
      link: "#",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Shield,
      title: "Vérifier un produit",
      description: "Contrôlez la conformité d'un produit ou service",
      link: "#",
      color: "bg-orange-600 hover:bg-orange-700"
    },
    {
      icon: Phone,
      title: "Contacter nos services",
      description: "Nos conseillers vous répondent du lundi au vendredi",
      link: "/contact",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: AlertTriangle,
      title: "Alertes et rappels",
      description: "Consultez les derniers rappels de produits et alertes sécurité",
      link: "#",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: BarChart3,
      title: "Observatoire des prix",
      description: "Suivez l'évolution des prix et nos analyses de marché",
      link: "#",
      color: "bg-indigo-600 hover:bg-indigo-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Services aux consommateurs
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Découvrez tous nos services pour vous accompagner dans vos démarches 
            et protéger vos droits de consommateur
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`${service.color} rounded-xl p-8 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group text-white`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="opacity-90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Besoin d'aide ?
                </h3>
                <p className="text-gray-600 mb-4">
                  Nos équipes sont à votre disposition pour vous accompagner dans vos démarches.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Horaires :</strong> Lundi au vendredi, 9h-17h</p>
                  <p><strong>Téléphone :</strong> 0 800 00 00 00 (gratuit)</p>
                  <p><strong>Email :</strong> contact@dgcc.gouv.fr</p>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  En urgence
                </h3>
                <p className="text-gray-600 mb-4">
                  Pour les signalements urgents ou les situations dangereuses.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Signalement d'urgence
                </button>
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  FAQ
                </h3>
                <p className="text-gray-600 mb-4">
                  Consultez les réponses aux questions les plus fréquentes.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Consulter la FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
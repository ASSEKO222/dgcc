import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, BarChart3, Scale, FileText, AlertTriangle, Calendar } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Lutter contre la vie chère",
      description: "Nous surveillons les prix et agissons pour protéger le pouvoir d'achat des consommateurs français.",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Découvrir nos actions"
    },
    {
      id: 2,
      title: "Encadrer les pratiques commerciales",
      description: "Nous veillons au respect des règles de concurrence loyale pour un marché équitable.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Voir la réglementation"
    },
    {
      id: 3,
      title: "Protéger les droits des consommateurs",
      description: "Information, médiation et sanctions : nous défendons vos droits au quotidien.",
      image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "Connaître vos droits"
    },
    {
      id: 4,
      title: "Sanctionner les abus de position dominante",
      description: "Nous luttons contre les pratiques anticoncurrentielles pour préserver la libre concurrence.",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1200",
      buttonText: "En savoir plus"
    }
  ];

  const infoCards = [
    {
      icon: BarChart3,
      title: "Observatoire des prix",
      description: "Suivez l'évolution des prix et consultez nos analyses de marché",
      color: "bg-blue-50 text-blue-600",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: Scale,
      title: "Droit de la consommation",
      description: "Découvrez vos droits et les recours possibles en tant que consommateur",
      color: "bg-green-50 text-green-600",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: FileText,
      title: "Déposer une plainte",
      description: "Signalez un problème ou déposez une réclamation en ligne",
      color: "bg-orange-50 text-orange-600",
      hoverColor: "hover:bg-orange-100"
    },
    {
      icon: AlertTriangle,
      title: "Alertes & rappels",
      description: "Consultez les derniers rappels de produits et alertes sécurité",
      color: "bg-red-50 text-red-600",
      hoverColor: "hover:bg-red-100"
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Nouvelle réglementation sur les pratiques commerciales déloyales",
      excerpt: "Les nouvelles mesures renforcent la protection des consommateurs face aux pratiques commerciales abusives...",
      date: "15 janvier 2025",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Réglementation"
    },
    {
      id: 2,
      title: "Baisse des prix de l'énergie : analyse de la DGCC",
      excerpt: "Notre observatoire des prix publie son rapport trimestriel sur l'évolution des tarifs énergétiques...",
      date: "12 janvier 2025",
      image: "https://images.pexels.com/photos/4792484/pexels-photo-4792484.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Analyse"
    },
    {
      id: 3,
      title: "Rappel de produits alimentaires : mesures d'urgence",
      excerpt: "Suite à des contrôles sanitaires, plusieurs produits sont rappelés par précaution...",
      date: "10 janvier 2025",
      image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Sécurité"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Réglementation': 'bg-blue-100 text-blue-800',
      'Analyse': 'bg-green-100 text-green-800',
      'Sécurité': 'bg-red-100 text-red-800',
      'Protection': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      {/* Carousel Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-blue-900/60"></div>
              </div>

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                      {slide.description}
                    </p>
                    <button className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services aux citoyens
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Accédez rapidement à nos services et informations essentiels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group ${card.hoverColor}`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Actualités
              </h2>
              <p className="text-lg text-gray-600">
                Restez informé de nos dernières actions et décisions
              </p>
            </div>
            <button className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
              <span>Voir toutes les actualités</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
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
    },
    {
      id: 4,
      title: "Lutte contre les arnaques en ligne : bilan 2024",
      excerpt: "Découvrez les actions menées par la DGCC pour protéger les consommateurs des fraudes numériques...",
      date: "8 janvier 2025",
      image: "https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Protection"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="text-center mt-8 md:hidden">
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
            <span>Voir toutes les actualités</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const usefulLinks = [
    'FAQ - Questions fréquentes',
    'Accessibilité',
    'Mentions légales',
    'Politique de confidentialité',
    'Plan du site',
    'Nous contacter'
  ];

  const quickLinks = [
    'Déposer une plainte',
    'Observatoire des prix',
    'Rappels de produits',
    'Réglementation',
    'Actualités',
    'Formations'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DGCC</h3>
                <p className="text-gray-300 text-sm">Direction Générale de la Concurrence et de la Consommation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              La DGCC veille au bon fonctionnement des marchés au bénéfice des consommateurs et des entreprises. 
              Nous protégeons les droits des consommateurs et garantissons une concurrence loyale.
            </p>

            {/* Contact information */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Télédoc 141<br />
                    59, boulevard Vincent Auriol<br />
                    75703 Paris Cedex 13
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">0 800 00 00 00 (numéro vert)</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">contact@dgcc.gouv.fr</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Accès rapide</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{link}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span>{link}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social media */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200 group"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>République Française</span>
                <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">🇫🇷</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Direction Générale de la Concurrence et de la Consommation - Tous droits réservés</p>
            <p className="mt-2 md:mt-0">Ministère de l'Économie, des Finances et de la Souveraineté industrielle et numérique</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
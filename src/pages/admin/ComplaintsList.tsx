import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Eye, FileText, Calendar, Building } from 'lucide-react';

const ComplaintsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const complaints = [
    {
      id: 'DGCC-2025-001234',
      firstName: 'Marie',
      lastName: 'Dupont',
      email: 'marie.dupont@email.com',
      phone: '06 12 34 56 78',
      city: 'Paris',
      company: 'SuperMarché Plus',
      type: 'Prix abusifs',
      description: 'Augmentation injustifiée des prix sur les produits de première nécessité...',
      date: '15 Jan 2025',
      status: 'Nouvelle',
      priority: 'Haute',
      attachments: 3
    },
    {
      id: 'DGCC-2025-001233',
      firstName: 'Jean',
      lastName: 'Martin',
      email: 'jean.martin@email.com',
      phone: '06 98 76 54 32',
      city: 'Lyon',
      company: 'TechStore SARL',
      type: 'Publicité mensongère',
      description: 'Publicité trompeuse sur les caractéristiques techniques d\'un smartphone...',
      date: '14 Jan 2025',
      status: 'En traitement',
      priority: 'Moyenne',
      attachments: 2
    },
    {
      id: 'DGCC-2025-001232',
      firstName: 'Sophie',
      lastName: 'Bernard',
      email: 'sophie.bernard@email.com',
      phone: '06 11 22 33 44',
      city: 'Marseille',
      company: 'RestauFast',
      type: 'Pratiques déloyales',
      description: 'Refus de remboursement malgré un produit défectueux...',
      date: '13 Jan 2025',
      status: 'Clôturée',
      priority: 'Basse',
      attachments: 1
    },
    {
      id: 'DGCC-2025-001231',
      firstName: 'Pierre',
      lastName: 'Durand',
      email: 'pierre.durand@email.com',
      phone: '06 55 44 33 22',
      city: 'Toulouse',
      company: 'ModeStyle',
      type: 'Défaut de conformité',
      description: 'Vêtements reçus ne correspondent pas à la description en ligne...',
      date: '12 Jan 2025',
      status: 'En traitement',
      priority: 'Haute',
      attachments: 4
    },
    {
      id: 'DGCC-2025-001230',
      firstName: 'Claire',
      lastName: 'Moreau',
      email: 'claire.moreau@email.com',
      phone: '06 77 88 99 00',
      city: 'Nice',
      company: 'AutoService Pro',
      type: 'Service après-vente défaillant',
      description: 'Réparation automobile non conforme et facturée abusivement...',
      date: '11 Jan 2025',
      status: 'Nouvelle',
      priority: 'Moyenne',
      attachments: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Nouvelle':
        return 'bg-blue-100 text-blue-800';
      case 'En traitement':
        return 'bg-yellow-100 text-yellow-800';
      case 'Clôturée':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Haute':
        return 'bg-red-100 text-red-800';
      case 'Moyenne':
        return 'bg-orange-100 text-orange-800';
      case 'Basse':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = complaint.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         `${complaint.firstName} ${complaint.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || complaint.status === statusFilter;
    const matchesType = typeFilter === 'all' || complaint.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Formulaires reçus</h1>
          <p className="text-gray-600 mt-2">Gestion des plaintes et signalements</p>
        </div>
        <div className="text-sm text-gray-500">
          {filteredComplaints.length} plainte(s) trouvée(s)
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Tous les statuts</option>
            <option value="Nouvelle">Nouvelle</option>
            <option value="En traitement">En traitement</option>
            <option value="Clôturée">Clôturée</option>
          </select>

          {/* Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Tous les types</option>
            <option value="Prix abusifs">Prix abusifs</option>
            <option value="Publicité mensongère">Publicité mensongère</option>
            <option value="Pratiques déloyales">Pratiques déloyales</option>
            <option value="Défaut de conformité">Défaut de conformité</option>
            <option value="Service après-vente défaillant">SAV défaillant</option>
          </select>

          {/* Export Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Exporter</span>
          </button>
        </div>
      </div>

      {/* Complaints Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Référence</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Plaignant</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Entreprise</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Type</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Statut</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Priorité</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredComplaints.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{complaint.id}</span>
                      {complaint.attachments > 0 && (
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <FileText className="w-3 h-3" />
                          <span>{complaint.attachments}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">
                        {complaint.firstName} {complaint.lastName}
                      </p>
                      <p className="text-sm text-gray-500">{complaint.email}</p>
                      <p className="text-sm text-gray-500">{complaint.city}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{complaint.company}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{complaint.type}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{complaint.date}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                      {complaint.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(complaint.priority)}`}>
                      {complaint.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Link
                        to={`/admin/complaints/${complaint.id}`}
                        className="text-blue-600 hover:text-blue-700 p-1 rounded"
                        title="Voir les détails"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/admin/create-report/${complaint.id}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                        title="Créer un constat"
                      >
                        Créer PV
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsList;
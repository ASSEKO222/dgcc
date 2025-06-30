import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Calendar, FileText } from 'lucide-react';

const ReportsHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const reports = [
    {
      id: 'PV-2025-001',
      complaintId: 'DGCC-2025-001234',
      company: 'SuperMarché Plus',
      agent: 'Jean Dupont',
      type: 'Prix abusifs',
      date: '15 Jan 2025',
      status: 'Transmis à la justice',
      sanctions: 'Amende de 5000€',
      priority: 'Haute'
    },
    {
      id: 'PV-2025-002',
      complaintId: 'DGCC-2025-001233',
      company: 'TechStore SARL',
      agent: 'Marie Martin',
      type: 'Publicité mensongère',
      date: '14 Jan 2025',
      status: 'En cours',
      sanctions: 'Avertissement',
      priority: 'Moyenne'
    },
    {
      id: 'PV-2025-003',
      complaintId: 'DGCC-2025-001232',
      company: 'RestauFast',
      agent: 'Pierre Durand',
      type: 'Pratiques déloyales',
      date: '13 Jan 2025',
      status: 'Traité',
      sanctions: 'Fermeture temporaire',
      priority: 'Haute'
    },
    {
      id: 'PV-2025-004',
      complaintId: 'DGCC-2025-001231',
      company: 'ModeStyle',
      agent: 'Sophie Bernard',
      type: 'Défaut de conformité',
      date: '12 Jan 2025',
      status: 'En cours',
      sanctions: 'Rappel de produits',
      priority: 'Moyenne'
    },
    {
      id: 'PV-2025-005',
      complaintId: 'DGCC-2025-001230',
      company: 'AutoService Pro',
      agent: 'Jean Dupont',
      type: 'Service après-vente défaillant',
      date: '11 Jan 2025',
      status: 'Transmis à la justice',
      sanctions: 'Amende de 10000€',
      priority: 'Haute'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-yellow-100 text-yellow-800';
      case 'Traité':
        return 'bg-green-100 text-green-800';
      case 'Transmis à la justice':
        return 'bg-purple-100 text-purple-800';
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

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.agent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Historique des PV</h1>
          <p className="text-gray-600 mt-2">Gestion et suivi des procès-verbaux</p>
        </div>
        <div className="text-sm text-gray-500">
          {filteredReports.length} PV trouvé(s)
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
            <option value="En cours">En cours</option>
            <option value="Traité">Traité</option>
            <option value="Transmis à la justice">Transmis à la justice</option>
          </select>

          {/* Date Range */}
          <input
            type="date"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {/* Export Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exporter</span>
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total PV</p>
              <p className="text-3xl font-bold text-gray-900">{reports.length}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">En cours</p>
              <p className="text-3xl font-bold text-yellow-600">
                {reports.filter(r => r.status === 'En cours').length}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Traités</p>
              <p className="text-3xl font-bold text-green-600">
                {reports.filter(r => r.status === 'Traité').length}
              </p>
            </div>
            <FileText className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Transmis</p>
              <p className="text-3xl font-bold text-purple-600">
                {reports.filter(r => r.status === 'Transmis à la justice').length}
              </p>
            </div>
            <FileText className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Référence PV</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Plainte liée</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Entreprise</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Agent</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Type</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Statut</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Sanctions</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{report.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(report.priority)}`}>
                        {report.priority}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                      {report.complaintId}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-900">{report.company}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600">{report.agent}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{report.type}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{report.date}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{report.sanctions}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-700 p-1 rounded"
                        title="Voir le PV"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-700 p-1 rounded"
                        title="Télécharger PDF"
                      >
                        <Download className="w-4 h-4" />
                      </button>
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

export default ReportsHistory;
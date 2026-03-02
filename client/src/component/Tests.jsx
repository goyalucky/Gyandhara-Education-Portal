import React from 'react';

const Tests = () => {
  const tests = [
    {
      id: 1,
      subject: 'Maths',
      description: 'The basics of Algebra and Calculus',
      date: '31/08/2024',
      time: '10 A.M - 11 A.M.',
      icon: '/api/placeholder/64/64',
      status: 'active'
    },
    {
      id: 2,
      subject: 'Physics',
      description: 'Mechanics and Thermodynamics',
      date: '02/09/2024',
      time: '2 P.M - 3 P.M.',
      icon: '/api/placeholder/64/64',
      status: 'upcoming'
    },
    {
      id: 3,
      subject: 'Chemistry',
      description: 'Organic Chemistry fundamentals',
      date: '30/08/2024',
      time: '9 A.M - 10 A.M.',
      icon: '/api/placeholder/64/64',
      status: 'expired'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'upcoming':
        return 'bg-blue-500';
      case 'expired':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Tests</h1>
        
        <div className="flex justify-center gap-4 mb-12">
          {['Active', 'Upcoming', 'Expired'].map((filter) => (
            <button
              key={filter}
              className={`${getStatusColor(filter.toLowerCase())} text-white px-6 py-2 rounded-full focus:outline-none transition duration-300 hover:opacity-80`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center transition duration-300 hover:bg-gray-700"
            >
              <div className="w-16 h-16 bg-cover rounded-full mr-6 flex-shrink-0 overflow-hidden">
                <img src={test.icon} alt={`${test.subject} Icon`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{test.subject}</h2>
                <p className="text-gray-300 mb-3">{test.description}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">{test.date}</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">{test.time}</span>
                  <span className={`${getStatusColor(test.status)} px-3 py-1 rounded-full text-sm capitalize`}>
                    {test.status}
                  </span>
                </div>
              </div>
              <a
                href={`test-page.html?id=${test.id}`}
                className={`${getStatusColor(test.status)} text-white px-6 py-2 rounded-full focus:outline-none transition duration-300 hover:opacity-80 ml-4`}
              >
                {test.status === 'expired' ? 'Review' : 'Attempt'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;
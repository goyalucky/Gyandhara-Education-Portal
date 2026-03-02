import React, { useState } from 'react';

const MySchool = () => {
  const [showHomework, setShowHomework] = useState(true);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const homeworkData = [
    { id: 1, subject: 'Maths', topic: 'Algebraic Expressions', details: 'Solve problems 1-10 on page 45.' },
    { id: 2, subject: 'Science', topic: 'Cell Biology', details: 'Create a diagram of a plant cell and label its parts.' },
    { id: 3, subject: 'English', topic: 'Shakespeare', details: 'Write a 500-word essay on the themes in Hamlet.' },
    { id: 4, subject: 'History', topic: 'World War II', details: 'Research and present on a significant battle of WWII.' },
  ];

  const redirectToPayment = () => {
    // Implement payment redirection logic here
    alert('Redirecting to payment page...');
  };

  const viewAssignment = (assignment) => {
    setSelectedAssignment(assignment);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">My School Dashboard</h1>
      </header>

      <main className="flex flex-col lg:flex-row justify-center gap-8 max-w-7xl mx-auto">
        <aside className="space-y-8 lg:w-1/3">
          {/* Attendance Section */}
          <section className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Attendance</h2>
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '76.4%' }}></div>
              </div>
              <span className="ml-2 font-bold text-green-500">76.4%</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Attended</span>
              <span>Held</span>
            </div>
          </section>

          {/* Result Section */}
          <section className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Result</h2>
            <div className="flex items-center mb-4">
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-red-500 h-4 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <span className="ml-2 font-bold text-red-500">50%</span>
            </div>
          </section>

          {/* Fees Section */}
          <section className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Fees</h2>
            <div className="flex items-center gap-2">
              <select className="bg-gray-700 text-white p-2 rounded-md flex-1">
                <option>Jun - Jul</option>
                <option>Aug - Sep</option>
                <option>Oct - Nov</option>
              </select>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
                onClick={redirectToPayment}
              >
                Pay Now
              </button>
            </div>
          </section>
        </aside>

        {/* Homework and Assignments Section */}
        <section className="bg-gray-800 rounded-lg shadow-md p-6 flex-1">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-bold">Homework & Assignments</h2>
            <div className="bg-gray-700 rounded-full p-1">
              <button
                className={`px-4 py-2 rounded-full transition duration-300 ${showHomework ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
                onClick={() => setShowHomework(true)}
              >
                Homework
              </button>
              <button
                className={`px-4 py-2 rounded-full transition duration-300 ${!showHomework ? 'bg-blue-500 text-white' : 'text-gray-300'}`}
                onClick={() => setShowHomework(false)}
              >
                Assignments
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-700">
                  <th className="py-3 px-4 rounded-tl-lg">Subject</th>
                  <th className="py-3 px-4">Topic</th>
                  <th className="py-3 px-4 rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {homeworkData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-700'}>
                    <td className="py-3 px-4">{item.subject}</td>
                    <td className="py-3 px-4">{item.topic}</td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300"
                        onClick={() => viewAssignment(item)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Modal for Assignment Details */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedAssignment.subject} Assignment</h2>
            <p className="mb-4 text-gray-300">{selectedAssignment.details}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition duration-300"
              onClick={() => setSelectedAssignment(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySchool;
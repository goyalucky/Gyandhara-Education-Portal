import React, { useState } from 'react';

const Notes = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const subjects = [
        { name: "Maths", icon: "\u2211", color: "from-blue-400 to-blue-600" },
        { name: "Science", icon: "\u269B", color: "from-green-400 to-green-600" },
        { name: "Social Studies", icon: "\u2690", color: "from-yellow-400 to-yellow-600" },
        { name: "English", icon: "\u270D", color: "from-purple-400 to-purple-600" },
        { name: "Hindi", icon: "\u0950", color: "from-red-400 to-red-600" },
        { name: "Computer", icon: "\u2328", color: "from-indigo-400 to-indigo-600" }
    ];

    const pdfs = {
        Maths: [
            { id: 1, name: "Algebra Basics", url: "/pdfs/algebra_basics.pdf" },
            { id: 2, name: "Calculus Introduction", url: "/pdfs/calculus_intro.pdf" }
            // Add more PDFs here...
        ],
        Science: [
            { id: 1, name: "Physics Fundamentals", url: "/pdfs/physics_fundamentals.pdf" },
            { id: 2, name: "Chemistry 101", url: "/pdfs/chemistry_101.pdf" }
            // Add more PDFs here...
        ],
        // Add more subjects with PDFs...
    };

    const handleBack = () => {
        setSelectedSubject(null);
    };

    return (
        <div className="flex flex-col items-center p-8 bg-slate-100 min-h-screen">
            {selectedSubject ? (
                <div className="w-full max-w-3xl">
                    <button onClick={handleBack} className="text-white mb-4">
                        ← Back
                    </button>
                    <h2 className="text-white text-3xl font-bold mb-6">{selectedSubject} Notes</h2>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Sn no.
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Topic
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Download
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pdfs[selectedSubject].map((pdf, index) => (
                                    <tr key={pdf.id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{index + 1}.</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{pdf.name}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                            <a href={pdf.url} download className="text-blue-500 hover:text-blue-700">
                                                ⬇️
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <>
                    <h1 className="text-black text-4xl font-bold mb-12 border-b-4 border-black pb-2">My Study Notes</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {subjects.map((subject, index) => (
                            <div key={index} className="group">
                                <div
                                    onClick={() => setSelectedSubject(subject.name)}
                                    className={`flex flex-col items-center justify-center bg-gradient-to-br ${subject.color} rounded-xl p-6 shadow-lg w-48 h-48 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer`}
                                >
                                    <div className="text-6xl mb-4 text-white">{subject.icon}</div>
                                    <p className="text-center text-white text-xl font-semibold">{subject.name}</p>
                                </div>
                                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className={`w-full py-2 bg-white text-gray-800 rounded-md shadow hover:bg-gray-100 transition-colors duration-300`}>
                Open Notes
              </button>
            </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Notes;

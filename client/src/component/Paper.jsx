import React from 'react';

const Paper = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 9 }, (_, index) => currentYear - index - 1);

  return (
    <div className="bg-slate-100 text-black min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Previous Year Papers
          <div className="w-96 h-1 bg-black mx-auto mt-4"></div>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {years.map((year, index) => (
            <a
              href={`paper-${year}.html`}
              className="w-full max-w-xs group"
              key={index}
            >
              <div className="bg-gradient-to-r from-green-300 to-blue-500 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold">{year}</div>
                  <div className="text-lg">{year + 1} Paper</div>
                </div>
                <div className="mt-4 text-gray-500 group-hover:text-white transition-colors duration-300">
                  Click to view →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paper;
import React from 'react'

export default function Dashboard() {
  const timeArray = [];

for (let i = 1; i <= 5; i++) {
    const hoursAgo = Math.floor(Math.random() * 24) + 1; // Random hours between 1 and 24
    timeArray.push(`${hoursAgo} hrs ago`);
}

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-lg rounded-lg lg:col-span-2 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Activity</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topics</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {timeArray.map((_, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">2 hrs ago</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">School Group</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Geography
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center">Quick Stats</h2>
            <div className="space-y-4">
              <div className=" bg-blue-50 flex justify-between items-center p-4 rounded-lg h-52">
                <div>
                  <div className="text-4xl font-semibold text-blue-700">10</div>
                  <div className="text-4xl text-blue-600">Streak</div>
                </div>
                <div className='text-6xl'>🔥</div>
              </div>
              <div className="flex justify-center items-center bg-green-50 p-4 rounded-lg h-52">
                <div className="text-4xl font-semibold text-green-700 mr-5">50</div>
                <div className="text-4xl text-green-600">XP</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Team Performance</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Design Team</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Development Team</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Marketing Team</span>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Test Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold text-gray-700">10</div>
                </div>
                <div className="text-gray-500 text-sm mt-1">Active Tests</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold text-gray-700">50</div>
                </div>
                <div className="text-gray-500 text-sm mt-1">Completed Tests</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold text-gray-700">4</div>
                </div>
                <div className="text-gray-500 text-sm mt-1">Canceled Tests</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-gray-600 mb-2">Monthly Progress</div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-blue-600 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
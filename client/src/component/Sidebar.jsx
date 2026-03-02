// import React from 'react'

// export default function Sidebar() {
//   return (
//     <div>
//         <div class="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
//         <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
//             <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded object-cover"/>
//             <span class="text-lg font-bold text-white ml-3">Logo</span>
//         </a>
//         <ul class="mt-4">
//             <li class="mb-1 group active">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
//                     <i class="ri-home-2-line mr-3 text-lg"></i>
//                     <span class="text-sm">Dashboard</span>
//                 </a>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
//                     <i class="ri-instance-line mr-3 text-lg"></i>
//                     <span class="text-sm">My School</span>
//                     <i class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
//                 </a>
//                 <ul class="pl-7 mt-2 hidden group-[.selected]:block">
//                     <li class="mb-4">
//                         <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Progress Report</a>
//                     </li> 
//                     <li class="mb-4">
//                         <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Completed order</a>
//                     </li> 
//                     <li class="mb-4">
//                         <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
//                     </li> 
//                 </ul>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
//                     <i class="ri-flashlight-line mr-3 text-lg"></i>
//                     <span class="text-sm">Groups</span>
//                 </a>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
//                     <i class="ri-flashlight-line mr-3 text-lg"></i>
//                     <span class="text-sm">My Syllabus</span>
//                 </a>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
//                     <i class="ri-flashlight-line mr-3 text-lg"></i>
//                     <span class="text-sm">Notes</span>
//                 </a>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
//                     <i class="ri-flashlight-line mr-3 text-lg"></i>
//                     <span class="text-sm">Lectures</span>
//                 </a>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
//                     <i class="ri-settings-2-line mr-3 text-lg"></i>
//                     <span class="text-sm">Tests</span>
//                 </a>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
//                     <i class="ri-settings-2-line mr-3 text-lg"></i>
//                     <span class="text-sm">Tests</span>
//                 </a>
//             </li>
//             <li class="mb-1 group">
//                 <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
//                     <i class="ri-settings-2-line mr-3 text-lg"></i>
//                     <span class="text-sm">Settings</span>
//                 </a>
//             </li>
//         </ul>
//     </div>
//     <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import Dashboard from './Dashboard';
import './home.css'
import logo from "../assets/logo.jpg"
import MySchool from './MySchool';
// import Groups from './Groups';
import MySyllabus from './MySyllabus';
import Notes from './Notes';
// import Lectures from './Lectures';
import Paper from './Paper';
import Tests from './Tests';
import Settings from './Settings';

const Sidebar = ({ onSelectOption, selectedOption }) => {
  const options = [
    'Dashboard', 'My School', 'My Syllabus', 'Notes', 'PYQ', 'Tests', 'Settings'
  ];

  return (
    <div className="w-64 bg-gray-400 h-screen p-4 ">
        <div class="flex items-center gap-1"><img src={logo} alt="Gyaandhaara Logo" class="rounded-full h-14 w-14"/>
        <div>
        <h2 className="text-2xl text-black font-bold mb-14 ">GyaanDhaara</h2>
        </div>
        
        </div>
      {options.map((option) => (
        <button
          key={option}
          className={`w-full mb-6 p-2 text-left text-lg ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-400'}`}
          onClick={() => onSelectOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default function Landing() {
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'Dashboard':
        return <Dashboard />;
      case 'My School':
        return <MySchool />;
      case 'My Syllabus':
        return <MySyllabus />;
      case 'Notes':
        return <Notes />;
      case 'PYQ':
        return <Paper />;
      case 'Tests':
        return <Tests />;
      case 'Settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelectOption={setSelectedOption} selectedOption={selectedOption} />
      <div className="flex-1 bg-white flex flex-col">
        <div className="bg-gray-500 p-4 text-lg font-semibold">
          {selectedOption}
        </div>
        <div className="flex-1 overflow-auto">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

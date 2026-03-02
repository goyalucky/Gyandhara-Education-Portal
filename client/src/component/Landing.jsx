// import React from 'react'
// import Sidebar from './Sidebar'
// import Navigation from './Navigation'
// import UserPage from './UserPage'

// export default function Landing() {
//   return (
//     <div>
//         {/* <Sidebar/> */}
//         <UserPage/>
//     </div>
//   )
// }

import { useState } from 'react'
// import { Button } from "@/components/ui/button"

// Sidebar component
const Sidebar = ({ onSelectOption, selectedOption }) => {
  const options = ['Dashboard','My School','Groups','My Syllabus','Notes','Lectures','PYQ','Tests','Settings']
  
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      {options.map((option) => (
        <Button
          key={option}
          className={`w-full mb-2 ${selectedOption === option ? 'bg-primary text-primary-foreground' : ''}`}
          onClick={() => onSelectOption(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  )
}

// Placeholder components for each option
const Dashboard = () => <div className="p-4"><h2 className="text-2xl font-bold">Dashboard</h2><p>Welcome to your dashboard!</p></div>
const Profile = () => <div className="p-4"><h2 className="text-2xl font-bold">Profile</h2><p>Here's your profile information.</p></div>
const Settings = () => <div className="p-4"><h2 className="text-2xl font-bold">Settings</h2><p>Adjust your settings here.</p></div>

// Main component
export default function Landing() {
  const [selectedOption, setSelectedOption] = useState('Dashboard')

  const renderComponent = () => {
    switch (selectedOption) {
      case 'Dashboard':
        return <Dashboard />
        case 'My School':
        return <MySchool/>
        case 'Groups':
        return <Groups />
        case 'My Syllabus':
        return <MySyllabus />
      case 'Notes':
        return <Notes />
      case 'Lectures':
        return <Lectures />
      case 'PYQ':
        return <PYQ />
      case 'Tests':
        return <Tests/>
        case 'Settings':
        return <Settings/>
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen">
      <Sidebar onSelectOption={setSelectedOption} selectedOption={selectedOption} />
      <div className="flex-1 bg-white flex flex-col">
        <div className="bg-gray-200 p-4 text-lg font-semibold">
          Currently viewing: {selectedOption}
        </div>
        <div className="flex-1 overflow-auto">
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}

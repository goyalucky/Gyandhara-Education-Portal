import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import MySyllabus from './MySyllabus';
import Paper from './Paper';
import Notes from './Notes';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component

export default function UserPage() {
  return (
    <Router>
        <Sidebar/>
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all">
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mysyllabus" element={<MySyllabus />} />
            <Route path="/paper" element={<Paper />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </main>
    </Router>
  );
}

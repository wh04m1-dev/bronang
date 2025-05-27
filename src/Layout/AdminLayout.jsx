import React from 'react';
import Navbar from '../Components/Index/Navbar.jsx';
import Sidebar from '../Components/Admin/Sidebar';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50"> {/* Full viewport height + light gray bg */}
      <Navbar />
      
      {/* Main content area */}
      <div className="flex flex-col md:flex-row"> {/* Responsive flex direction */}
        {/* Sidebar - fixed width on desktop, hidden on mobile (if needed) */}
        <div className="w-full md:w-64 shadow-md"> 
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto"> {/* Responsive padding */}
          <Outlet /> {/* This will render nested routes */}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
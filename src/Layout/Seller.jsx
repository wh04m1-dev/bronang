import React from 'react';
import Sidebar from '../Components/Seller/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from "../Components/Index/Navbar.jsx";

function Seller() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar - fixed width on desktop, collapsible on mobile */}
        <div className="hidden md:block w-64 bg-white shadow-md">
          <Sidebar />
        </div>
        
        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Seller;
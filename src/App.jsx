import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <div className="flex h-screen bg-gradient-to-tr from-orange-100 via-orange-200 to-red-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="p-6">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default App;

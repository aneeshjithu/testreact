import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaChartBar,
  FaCogs,
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa"; // React Icons

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleDashboardMenu = () => {
    setIsDashboardOpen((prev) => !prev);
  };

  return (
    <div
      className={`h-screen ${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-gradient-to-b from-orange-200 via-orange-400 to-red-400 text-gray-900 transition-all duration-75 overflow-y-auto`}
    >
      {/* Header with Sidebar Toggle */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <span className="text-1xl">
            {isSidebarOpen ? (
              <FaChevronLeft
                onClick={toggleSidebar}
                className="cursor-pointer text-gray-800"
              />
            ) : (
              <FaChevronRight
                onClick={toggleSidebar}
                className="cursor-pointer text-gray-800"
              />
            )}
          </span>
          <span
            className={`text-lg font-bold whitespace-nowrap overflow-hidden transition-opacity duration-300 ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            My React App
          </span>
        </div>
      </div>

      <ul className="space-y-2 px-4 text-sm">
        {/* Dashboard Menu */}
        <li>
          <div
            className={`flex items-center justify-between hover:bg-orange-300 p-2 rounded cursor-pointer ${
              isSidebarOpen ? "" : "justify-center"
            }`}
            onClick={toggleDashboardMenu}
          >
            <div className="flex items-center space-x-2">
              <FaTachometerAlt />
              {isSidebarOpen && <span>Dashboard</span>}
            </div>
            {isSidebarOpen && (
              <span
                className={`transform transition-transform ${
                  isDashboardOpen ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown />
              </span>
            )}
          </div>
          {isDashboardOpen && isSidebarOpen && (
            <ul className="pl-6 mt-2 space-y-1">
              <li className="flex items-center space-x-2 hover:bg-orange-300 p-2 rounded">
                <FaChartBar />
                <span>Overview</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-orange-300 p-2 rounded">
                <FaChartBar />
                <span>Stats</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-orange-300 p-2 rounded">
                <FaChartBar />
                <span>Reports</span>
              </li>
            </ul>
          )}
        </li>

        {/* Other Menu Items */}
        <li
          className={`hover:bg-orange-300 p-2 rounded ${
            isSidebarOpen ? "" : "flex justify-center"
          }`}
        >
          <div className="flex items-center space-x-2">
            <FaChartBar />
            {isSidebarOpen && <a href="#">Analytics</a>}
          </div>
        </li>
        <li
          className={`hover:bg-orange-300 p-2 rounded ${
            isSidebarOpen ? "" : "flex justify-center"
          }`}
        >
          <div className="flex items-center space-x-2">
            <FaCogs />
            {isSidebarOpen && <a href="#">Settings</a>}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

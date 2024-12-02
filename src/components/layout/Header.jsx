import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-200 via-orange-400 to-red-400 bg-300 animate-gradientSlow shadow-2xl p-6 flex justify-between items-center h-20">
      {/* Title */}
      <h1 className="text-2xl drop-shadow-lg text-white font-bold">
        Dashboard
      </h1>
    </header>
  );
}

export default Header;

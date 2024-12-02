import React from "react";
import CustomerRegistration from "../CustomerRegistration";

function DashboardContent({ user }) {
  console.log(user);
  return (
    <div className="p-6 flex-1 bg-transparent">
      {/* Outer container for spacing */}
      <div className="flex flex-wrap gap-6">
        {/* Content container */}
        <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-xl w-full max-w-4xl mx-auto">
          {/* Replace CustomerRegistration with other components as needed */}
          <CustomerRegistration />
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;

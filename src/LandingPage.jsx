import React from "react";

function LandingPage() {
  const cards = [
    { title: "Revenue", value: "$5,000" },
    { title: "Users", value: "1,200" },
    { title: "Performance", value: "95%" },
  ];

  return (
    <div className="flex flex-auto gap-5 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-4 shadow-xl rounded w-full sm:w-1/2 lg:w-1/3 bg-gray-500 text-white"
        >
          <h1 className="text-sm font-semibold">{card.title}</h1>
          <p className="text-1xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default LandingPage;

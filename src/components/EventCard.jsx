import React from "react";

const EventCard = ({ title, img, description }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-75 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};
export default EventCard;

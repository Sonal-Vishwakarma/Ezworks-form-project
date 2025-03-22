import React from "react";

const services = [
  { title: "Presentation Design", icon: "📊" },
  { title: "Audio - Visual Production", icon: "🎥" },
  { title: "Translation Services", icon: "🌍" },
  { title: "Graphic Design", icon: "🎨" },
  { title: "Research & Analytics", icon: "📊" },
  { title: "Data Processing", icon: "📂" },
];

const ServiceCards = () => {
  return (
    <div className="grid-container">
      {services.map((service, index) => (
        <div key={index} className="card">
          <h3>{service.icon} {service.title}</h3>
          <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;

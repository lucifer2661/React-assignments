import { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "Training Programs",
    description: "Structured coaching sessions designed to improve technique, fitness, and match performance.",
  },
  {
    title: "Hourly Court Rental",
    description: "Book premium courts by the hour for practice sessions, matches, or casual play.",
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="services">
      <div className="services-left">
        <span className="section-label">Services</span>
        <h2>Explore our full range of tennis services designed for every player.</h2>
        <button className="explore-btn">Explore More ↗</button>
      </div>

      <div className="services-right">
        <div className="service-card">
          <h3>{services[current].title}</h3>
          <p>{services[current].description}</p>
        </div>

        <div className="arrow-controls">
          <button onClick={() => setCurrent(current === 0 ? services.length - 1 : current - 1)}>←</button>
          <button onClick={() => setCurrent(current === services.length - 1 ? 0 : current + 1)}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
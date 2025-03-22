import React from "react";
import Form from "./Components/Form";
import ServiceCards from "./Components/ServiceCards";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="logo">
          <span className="ez">EZ</span> Works
        </h1>
        <p>Suite Of Business Support Services</p>
      </header>

      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...
      </p>
      <Form />
      <ServiceCards />
    </div>
  );
};

export default App;

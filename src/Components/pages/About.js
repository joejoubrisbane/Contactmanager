import React from "react";

function About(props) {
  return (
    <div>
      <h1 className="display-4">Hello {props.match.params.name}</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0</p>
    </div>
  );
}

export default About;

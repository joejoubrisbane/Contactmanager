import React from "react";

const Collapse = props => {
  if (props.showContactInfo) {
    return props.children;
  } else {
    return null;
  }
};

export default Collapse;

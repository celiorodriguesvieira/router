import React from "react";

export default function PageTitle(props) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </React.Fragment>
  );
}

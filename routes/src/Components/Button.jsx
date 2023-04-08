import React from "react";

export default function Button(props) {
  return (
    <React.Fragment>
      <input type={props.type} value={props.value} />
    </React.Fragment>
  );
}

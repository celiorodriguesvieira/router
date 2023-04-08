import React from "react";
import PageTitle from "../Components/PageTitle";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <React.Fragment>
      <PageTitle title="Sobre" subtitle="Nossa empresa..." />
      <div>
        <Link to="/">
          <Button type="button" value="Home" />
        </Link>
      </div>
      <h3>Sobre</h3>
      <p>Framework: React</p>
      <p>Linguagem: JavaScript</p>
    </React.Fragment>
  );
}

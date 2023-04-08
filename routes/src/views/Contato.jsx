import React from "react";
import PageTitle from "../Components/PageTitle";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <React.Fragment>
      <PageTitle title="Contato" />
      <div>
        <Link to="/">
          <Button type="button" value="Home" />
        </Link>
      </div>
      <h3>Contato do desenvolvedor</h3>
      <h4>Name: Celio R.V Júnior</h4>
      <p>celio.ldn@gmail.com</p>
    </React.Fragment>
  );
}

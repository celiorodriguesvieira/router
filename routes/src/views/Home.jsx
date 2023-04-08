import React from "react";
import PageTitle from "../Components/PageTitle";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <PageTitle title="Home" subtitle="....."></PageTitle>
      <div>
        <Link to="/sobre">
          <Button type="button" value="Sobre" />
        </Link>
        <Link to="/contato">
          <Button type="button" value="Contato" />
        </Link>
      </div>
    </React.Fragment>
  );
}

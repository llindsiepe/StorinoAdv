import React from "react";

import Logotipo from "../../images/logotipo.png";
import User from "../../images/user.png";

import { Main, LogotipoImage, Menu, Acess } from "./styles.js";

import OptionMenu from "../OptionMenu/index.js";

export default function Navbar() {
  return (
    <>
      <Main>
        <LogotipoImage>
          <img src={Logotipo} width="75rem" height="75rem" />
        </LogotipoImage>

        <Menu style={{ display: "flex" }}>
          <OptionMenu title={"Home"} />
          <OptionMenu title={"Sobre nós"} />
          <OptionMenu title={"Áreas de atuação"} />
          <OptionMenu title={"Nossa equipe"} />
          <OptionMenu title={"Contato"} />
        </Menu>

        <Acess>
          <img src={User} width="20rem" height="20rem" />
          <h6>Associados</h6>
        </Acess>
      </Main>
    </>
  );
}

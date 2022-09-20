import React from "react";
import { useHistory, useNavigate } from "react-router-dom";

import Logotipo from "../../images/logotipo.png";
import User from "../../images/user.png";

import { Main, LogotipoImage, Menu, Acess } from "./styles.js";

import OptionMenu from "../OptionMenu/index.js";

export default function Navbar() {
  // const history = useHistory();

  const navigate = useNavigate();

  return (
    <>
      <Main>
        <LogotipoImage>
          <img src={Logotipo} width="75rem" height="75rem" />
        </LogotipoImage>

        <Menu>
          <OptionMenu
            title={"Home"}
            onClick={() => {
              navigate("/");
            }}
          />
          <OptionMenu
            title={"Sobre nós"}
            onClick={() => {
              navigate("/sobre");
            }}
          />
          <OptionMenu
            title={"Áreas de atuação"}
            onClick={() => {
              // history.push("/sobre");
              navigate("/areas");
            }}
          />
          <OptionMenu
            title={"Nossa equipe"}
            onClick={() => {
              // history.push("/sobre");
              navigate("/colaborators");
            }}
          />
          <OptionMenu
            title={"Contato"}
            onClick={() => {
              // history.push("/sobre");
              navigate("/contact");
            }}
          />
        </Menu>

        <Acess>
          <img src={User} width="20rem" height="20rem" />
          <a href="http://storino.ddns.net:5000/">
            <h6>Associados</h6>
          </a>
        </Acess>
      </Main>
    </>
  );
}

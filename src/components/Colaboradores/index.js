import React from "react";
import { propTypes } from "react-bootstrap/esm/Image.js";
import ModalAbout from "../ModalAbout/index.js";
import { Main, TextCard } from "./styles.js";

export default function Colaboradores({
  name,
  text,
  src,
  description,
  handleOpen,
  about,
  email,
  oab,
}) {
  return (
    <>
      <Main>
        <img src={src} style={{ marginBottom: "1rem" }} />
        <h3>{name}</h3>
        <h6>{text}</h6>
        <button onClick={() => handleOpen(name, text, src, about, email, oab)}>
          <h6>{description}</h6>
        </button>
      </Main>
    </>
  );
}

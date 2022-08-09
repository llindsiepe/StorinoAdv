import React from "react";
import { Main, TextCard } from "./styles.js";

export default function Colaboradores({
  name,
  text,
  src,
  description,
  handleOpen,
}) {
  return (
    <>
      <Main>
        <img src={src} style={{ marginBottom: "1rem" }} />
        <h3>{name}</h3>
        <h6>{text}</h6>
        <button onClick={handleOpen}>
          <h6>{description}</h6>
        </button>
      </Main>
    </>
  );
}

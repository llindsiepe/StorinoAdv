import React from "react";
import { Main, TextCard } from "./styles.js";

export default function Colaboradores({ name, text, src, description }) {
  return (
    <>
      <Main>
        <img src={src} style={{ marginBottom: "1rem" }} />
        <h3>{name}</h3>
        <h6>{text}</h6>
        <h6>{description}</h6>
      </Main>
    </>
  );
}

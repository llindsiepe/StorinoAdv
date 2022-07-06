import React from "react";
import { Main, TextCard } from "./styles.js";

export default function Card({ title, text }) {
  return (
    <>
      <Main>
        <TextCard>
          <h3>{title}</h3>
          <h6>{text}</h6>
        </TextCard>
      </Main>
    </>
  );
}

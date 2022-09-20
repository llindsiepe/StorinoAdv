import React from "react";
import { Container } from "./styles.js";

export default function Button({ title, onClick, active }) {
  return (
    <>
      <Container
        active={active}
        onClick={() => {
          onClick();
        }}
      >
        {title}
      </Container>
    </>
  );
}

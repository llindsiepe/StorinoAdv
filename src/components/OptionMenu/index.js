import React from "react";
import { Container } from "./styles.js";

export default function Button({ title, click, active }) {
  return (
    <>
      <Container
        active={active}
        onClick={() => {
          click();
        }}
      >
        {title}
      </Container>
    </>
  );
}

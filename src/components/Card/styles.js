import * as React from "react";
import { styled } from "@mui/system";

export const Main = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  color: "#373737",
  padding: "2rem",

  width: 300,
  height: 150,
  marginTop: -60,

  background: "#FAFAFA",
  borderRadius: 6,
});

export const TextCard = styled("div")({
  h6: { textAlign: "justify" },
});

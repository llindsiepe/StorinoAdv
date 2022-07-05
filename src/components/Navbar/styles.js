import * as React from "react";
import { styled } from "@mui/system";

export const Main = styled("div")({
  width: "100%",
  height: 90,
  backgroundColor: "#373737",
  display: "flex",
  justifyContent: "space-between",

  fontFamily: "Poppins",
});

export const LogotipoImage = styled("div")({
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft: "10%",
});

export const Menu = styled("div")({
  gap: "2rem",
});

export const Acess = styled("div")({
  display: "flex",
  color: "white",
  alignItems: "center",
  gap: "1rem",
  marginRight: "10%",
});

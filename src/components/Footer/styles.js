import * as React from "react";
import { styled } from "@mui/system";

export const Main = styled("div")({
  width: "100%",
  height: "20rem",
  backgroundColor: "#373737",
});

export const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Law = styled("h6")({
  color: "white",
  marginTop: "3%",
  textAlign: "center",
});

export const Info = styled("div")({
  marginLeft: "5%",
});

export const Redes = styled("div")({
  marginTop: "3%",
  color: "white",
});

export const AboutUs = styled("div")({
  color: "white",

  h5: { width: "80%", textAlign: "justify" },
});

export const ButtonSecondary = styled("div")({
  width: "210px",
  height: "44px",
  border: "2px solid white",
  color: "white",
  textAlign: "center",
  borderRadius: "6px",
  marginRight: "5%",
});

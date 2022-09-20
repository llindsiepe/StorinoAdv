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
  marginTop: "2%",
  textAlign: "center",
});

export const Info = styled("div")({
  marginLeft: "5%",
});

export const Redes = styled("div")({
  marginTop: "4rem",
  color: "white",

  h6: {
    marginLeft: "0.5rem",
  },
});

export const AboutUs = styled("div")({
  color: "white",
  marginTop: "2.5rem",

  h5: { width: "80%", textAlign: "justify" },
});

export const ButtonSecondary = styled("a")({
  width: "16rem",
  padding: "0.5rem",
  border: "2px solid white",
  color: "white",
  textAlign: "center",
  borderRadius: "6px",
  marginRight: "5%",
  textDecoration: "none",
});

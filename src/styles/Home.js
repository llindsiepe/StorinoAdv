import * as React from "react";
import { styled } from "@mui/system";

import Image from "./images/Banner.png";

export const Container = styled("div")({
  margin: -8,
});

export const OptionBanner = styled("div")({
  display: "flex",
  marginTop: "4%",
});

export const ButtonMain = styled("div")({
  width: "20rem",
  height: "2rem",
  background: "#D9D9D9",
  color: "#373737",
  textAlign: "center",
  borderRadius: "6px",
  paddingTop: "0.5rem",
  marginRight: "auto",
  marginLeft: "auto",
});

export const ButtonSecondary = styled("div")({
  width: "210px",
  height: "44px",
  border: "2px solid #D9D9D9",
  color: "#D9D9D9",
  textAlign: "center",
  borderRadius: "6px",
  marginRight: "auto",
});

export const Banner = styled("div")({
  backgroundImage: `url(${Image})`,
  width: "100%",
  height: "40rem",
  color: "white",
  marginTop: -25,

  h1: {
    paddingTop: "12rem",
    textAlign: "center",
  },
  h5: {
    paddingTop: "0.2rem",
    textAlign: "center",
  },
});

export const Cards = styled("div")({
  display: "flex",
  marginLeft: "10%",
  marginRight: "10%",
  justifyContent: "space-between",
});

export const AboutUs = styled("div")({
  marginLeft: "10%",
  marginTop: "10%",
});

export const Title = styled("div")({
  marginLeft: "10%",
  marginTop: "2%",

  h3: {
    color: "#373737",
  },
  h5: {
    color: "#9A9A9A",
    marginTop: "-1%",
  },
  h6: {
    width: "70%",
    fontWeight: "400",
    fontSize: "1rem",
    color: "#373737",
    textAlign: "justify",
  },
});

export const Expertise = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "15%",
  marginBottom: "15%",
});

export const CardsExpertise = styled("div")({
  marginLeft: "15%",
});

export const Idealizadores = styled("div")({});

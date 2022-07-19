import * as React from "react";
import { styled } from "@mui/system";

export const Container = styled("div")({
  margin: -8,
});

export const Banner = styled("div")({
  display: "flex",
  marginTop: "4rem",
  marginBottom: "15rem",
});

export const Title = styled("div")({
  marginLeft: "10%",
  marginTop: "auto",
  marginBottom: "5rem",

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
    fontSize: "0.8rem",
    color: "#373737",
    textAlign: "justify",
  },
});

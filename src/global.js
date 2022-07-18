import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      "*, *::before, *::after": {
        boxSizing: "inherit",
      },
      body: {
        height: "100%",
        width: "100%",
        fontFamily: "Poppins",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

export const GlobalStyles = () => {
  useStyles();

  return null;
};

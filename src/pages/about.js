import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";

import { Container, Banner, Title } from "./styles/About";

import PhotoAbout from "./images/photoAbout.png";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function About() {
  return (
    <Container>
      <GlobalStyles
        styles={(theme) => ({
          body: { fontFamily: "Poppins" },
        })}
      />
      <Navbar />
      <Banner>
        <img src={PhotoAbout} />
        <Title>
          <h3>Sobre nós</h3>
          <h5>Conheça mais sobre quem somos</h5>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
            ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
            penatibus et id volutpat massa. In aliquet amet, porta faucibus
            venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
            volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
            vitae leo amet fames nunc, fames.
          </h6>
        </Title>
      </Banner>

      <Footer />
    </Container>
  );
}

export default About;

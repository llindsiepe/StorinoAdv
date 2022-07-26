import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";

import {
  Container,
  Content,
  Contato,
  Title,
  Options,
  ButtonSecondary,
  OptionsRedes,
} from "../styles/Contact";

import LineTitle from "../images/LineTitle.png";
import ContactFacebook from "../images/ContactFacebook.png";
import ContactInstagram from "../images/ContactInstagram.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <Container>
      <GlobalStyles
        styles={(theme) => ({
          body: { fontFamily: "Poppins" },
        })}
      />
      <Navbar />

      <Content>
        <Contato>
          <Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={LineTitle} height="60rem" />
              <div style={{ marginLeft: "1rem" }}>
                <h3>Entre em contato</h3>
                <h5>Fale conosco</h5>
              </div>
            </div>
          </Title>

          <Options>
            <ButtonSecondary>Envie um Whatsapp</ButtonSecondary>
            <ButtonSecondary>Envie um Email</ButtonSecondary>
          </Options>
        </Contato>

        <Contato>
          <Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={LineTitle} height="60rem" />
              <div style={{ marginLeft: "1rem" }}>
                <h3>Siga nos nas redes</h3>
                <h5>Acompanhe nossas novidades e cotidiano</h5>
              </div>
            </div>
          </Title>

          <OptionsRedes>
            <img src={ContactFacebook} style={{ marginRight: "1rem" }} />
            <img src={ContactInstagram} />
          </OptionsRedes>
        </Contato>
      </Content>

      <Footer />
    </Container>
  );
}

export default Contact;

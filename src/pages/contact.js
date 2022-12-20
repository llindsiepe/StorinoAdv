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
            <a href="https://api.whatsapp.com/send?phone=5511992084052">
              <ButtonSecondary>Envie um Whatsapp</ButtonSecondary>
            </a>
            <a href="mailto:storino@storino.adv.br">
              <ButtonSecondary>Envie um Email</ButtonSecondary>
            </a>
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
            <a href="https://www.facebook.com/storinoadv/">
              <img src={ContactFacebook} style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/storinoadvogados/">
              <img src={ContactInstagram} />
            </a>
          </OptionsRedes>
        </Contato>
      </Content>

      <Footer />
    </Container>
  );
}

export default Contact;

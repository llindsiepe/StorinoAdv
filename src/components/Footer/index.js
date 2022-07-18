import React from "react";
import {
  Main,
  Container,
  Info,
  Redes,
  AboutUs,
  ButtonSecondary,
  Law,
} from "./styles.js";

import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/Instagram.png";
import Linkedin from "../../images/Linkedin.png";

export default function Card() {
  return (
    <>
      <Main>
        <Container>
          <Info>
            {/* <img src={Logotipo} style={{ marginBottom: "10%" }} /> */}
            <Redes>
              <h5>Siga-nos nas redes</h5>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "-1rem",
                }}
              >
                <img src={Facebook} width="20rem" height="20rem" />
                <h6>Facebook</h6>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "-1rem",
                }}
              >
                <img src={Instagram} width="20rem" height="20rem" />
                <h6>Instagram</h6>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "-1rem",
                }}
              >
                <img src={Linkedin} width="20rem" height="20rem" />
                <h6>Linkedin</h6>
              </div>
              {/* <img src={FacebookC} style={{ marginRight: "5%" }} />
              <img src={InstagramC} style={{ marginRight: "5%" }} />
              <img src={WhatsAppC} width="50rem" height="50rem" /> */}
            </Redes>
          </Info>
          <AboutUs>
            <h5>
              Fale conosco
              <br />
              <br />
              Rua São Paulo 176, Vila Tijuco, Guarulhos/SP. CEP: 07020-210.{" "}
              <br />
              <br />
              (11) 4969-7474 • (11) 99208-4052
            </h5>
          </AboutUs>
          <ButtonSecondary>Fale conosco</ButtonSecondary>
        </Container>
        <Law>© 2022 Storino Advogados. Todos os direitos reservados</Law>
      </Main>
    </>
  );
}

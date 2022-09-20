import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";

import { Container, Banner, Title } from "../styles/About";

import PhotoAbout from "../images/about.jpeg";
import LineTitle from "../images/LineTitle.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <img src={PhotoAbout} height="800rem" />
        <Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LineTitle} height="60rem" />
            <div style={{ marginLeft: "1rem" }}>
              <h3>Sobre nós</h3>
              <h5>Conheça mais sobre quem somos</h5>
            </div>
          </div>
          <h6>
            O Storino Advogados atua de forma clara e objetiva, por meio de
            trabalho particular e criterioso quanto aos interesses do
            contratante, identificando soluções inovadoras e únicas no campo
            legal, com a intenção de promover a antecipação das soluções
            necessárias aos clientes.
          </h6>
        </Title>
      </Banner>

      <Title style={{ marginRight: "10%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={LineTitle} height="60rem" />
          <div style={{ marginLeft: "1rem" }}>
            <h3>Nossa história</h3>
            <h5>Conheça mais sobre nossa trajetória</h5>
          </div>
        </div>
        <h6 style={{ width: "100%", fontSize: "1rem" }}>
          Nascido do sonho do Dr. Leopoldo Storino, o Storino Advogados surge
          literalmente da estaca zero, sediado na cidade de Guarulhos com um
          foco claro e objetivo bem traçado, crescer com solidez, confiança e
          ética. Com esses pilares o Storino Advogados cresceu, ampliou as áreas
          de atuação, buscou se especializar para atender seus clientes com a
          técnica jurídica necessária para trazer sempre as melhores soluções.
          Hoje, contamos com os melhores profissionais, atendendo em todas as
          áreas do direito, o sonho se tornou uma realidade, nos tornamos um dos
          escritórios mais modernos, dinâmicos e eficientes no trato dos casos,
          e nas soluções práticas, atendendo com excelência nossos clientes e
          parceiros.
        </h6>
      </Title>

      <Footer />
    </Container>
  );
}

export default About;

import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

import Icon from "../images/Icon.png";
import IconComunicação from "../images/IconComunicação.png";
import IconSegurança from "../images/IconSegurança.png";
import Photo from "../images/photo.png";
import LineTitle from "../images/LineTitle.png";

import GlobalStyles from "@mui/material/GlobalStyles";

import {
  Container,
  Banner,
  OptionBanner,
  ButtonMain,
  ButtonSecondary,
  Cards,
  AboutUs,
  Title,
  CardsExpertise,
  Expertise,
  Idealizadores,
} from "../styles/Home";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CardExpertise from "../components/CardExpertise";
import Colaboradores from "../components/Colaboradores";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <GlobalStyles
        styles={(theme) => ({
          body: { fontFamily: "Poppins" },
        })}
      />
      <Navbar />
      <Banner>
        <h1>
          Experiência e dedicação é o que
          <br />
          <b>nos prepara para nossos casos.</b>
        </h1>
        <h5>Com mais de 10 anos de mercado, sabemos como e quando agir.</h5>
        <OptionBanner>
          <ButtonMain href="https://api.whatsapp.com/send?phone=5511992084052">
            Fale conosco
          </ButtonMain>
        </OptionBanner>
      </Banner>
      <Cards>
        <Card
          name="Proatividade"
          src={Icon}
          text="Visando sempre as soluções rápidas e ágeis, nos antecipamos as demandas dos clientes, trazendo segurança e resolução das situações do cotidiano."
        />
        <Card
          name="Segurança"
          src={IconSegurança}
          text="Com larga experiência no contencioso e preventivo, trazemos sempre soluções eficientes e seguras para o dia a dia dos nossos clientes."
        />
        <Card
          name="Comunicação"
          src={IconComunicação}
          text="Sempre dinâmico no contato direto e indireto com os clientes, trazemos respostas rápidas as dúvidas e questionamentos do dia a dia no desenvolvimento do trabalho junto aos clientes e parceiros."
        />
      </Cards>
      <AboutUs>
        <img src={Photo} width="550" />
        <Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LineTitle} height="60rem" />
            <div style={{ marginLeft: "1rem" }}>
              <h3>O Escritório</h3>
              <h5>Conheça mais sobre quem somos</h5>
            </div>
          </div>
          <h6>
            Situados na região central da cidade de Guarulhos, próximos aos
            principais centros empresariais de São Paulo, o Storino Advogados
            nasce em 2010, fincando sua sede no ano de 2015, onde permanece até
            hoje. De origem dinâmica, e eficiente, o Storino advogados sempre se
            pautou pela credibilidade, eficiência e competência no
            desenvolvimento do trabalho juntos aos clientes, buscando soluções
            preventivas, e resolutivas em situações desde as mais complexas até
            as mais singelas.
          </h6>
        </Title>
      </AboutUs>
      <Expertise>
        <Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LineTitle} height="60rem" />
            <div style={{ marginLeft: "1rem" }}>
              <h3>Área de atuação</h3>
              <h5>Conheça mais sobre onde atuamos</h5>
            </div>
          </div>
        </Title>
        <CardsExpertise>
          <div>
            <CardExpertise
              title="Trabalhista"
              text="Para atender pessoas jurídicas e pessoas físicas com direcionamento em demandas trabalhistas."
            />
            <CardExpertise
              title="Cível"
              text="Atuação de maneira preventiva e contenciosa, com providências extrajudiciais e propositura de ações judiciais."
            />
            <CardExpertise
              title="Família e sucessões"
              text="Atuação de maneira consultiva e preventiva, bem como, na resolução de conflitos que envolvam a seara familiar."
            />
          </div>
          <div>
            <CardExpertise
              title="Consumidor"
              text="Com foco na orientação, prevenção e resolução de conflitos nas relações de consumo."
            />
            <CardExpertise
              title="Previdenciário"
              text="Com exercício em demandas administrativas e judiciais relacionadas ao Regime Geral de Previdência Social (INSS) e Regimes Próprios de Previdência Social."
            />
            <CardExpertise
              title="Empresarial"
              text="Prática de assessoria/consultoria jurídica continuada para pequenas e grandes empresas."
            />
          </div>
        </CardsExpertise>
      </Expertise>

      <Footer />
    </Container>
  );
}

export default Home;

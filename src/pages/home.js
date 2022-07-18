import React from "react";

import Icon from "./images/Icon.png";
import IconComunicação from "./images/IconComunicação.png";
import IconSegurança from "./images/IconSegurança.png";
import Photo from "./images/photo.png";

import Leopoldo from "./images/Leopoldo.png";
import Wanessa from "./images/Wanessa.png";
import Fernanda from "./images/Fernanda.png";
import Jaqueline from "./images/Jaqueline.png";

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

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardExpertise from "./components/CardExpertise";
import Colaboradores from "./components/Colaboradores";
import Footer from "./components/Footer";

function App() {
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
          <ButtonMain>Fale conosco</ButtonMain>
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
      <AboutUs style={{ display: "flex" }}>
        <img src={Photo} width="550" />
        <Title>
          <h3>O Escritório</h3>
          <h5>Conheça mais sobre quem somos</h5>
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
          <h3>Área de atuação</h3>
          <h5>Conheça mais sobre onde atuamos</h5>
        </Title>
        <CardsExpertise>
          <div style={{ display: "flex" }}>
            <CardExpertise
              title="Trabalhista"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas diam commodo vel eget placerat nisl."
            />
            <CardExpertise
              title="Consumidor"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas diam commodo vel eget placerat nisl."
            />
          </div>
          <div style={{ display: "flex" }}>
            <CardExpertise
              title="Cível"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas diam commodo vel eget placerat nisl."
            />
            <CardExpertise
              title="Previdenciário"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas diam commodo vel eget placerat nisl."
            />
          </div>
          <div style={{ display: "flex" }}>
            <CardExpertise
              title="Família e sucessões"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas diam commodo vel eget placerat nisl."
            />
            <CardExpertise
              title="Empresarial"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et egestas diam commodo vel eget placerat nisl."
            />
          </div>
        </CardsExpertise>
      </Expertise>
      {/* <Idealizadores>
        <Title>
          <h3>Idealizadores</h3>
          <h5>Conheça os nossos idealizadores</h5>
        </Title>
        <div style={{ display: "flex", marginTop: "5%" }}>
          <Colaboradores
            src={Leopoldo}
            name="Leopoldo de Souza Storino"
            text="Sócio Fundador"
          />
          <Colaboradores
            src={Wanessa}
            name="Jaqueline de Souza Henrique"
            text="Sócia"
          />
          <Colaboradores
            src={Fernanda}
            name="Fernanda Fabri Ferreira"
            text="Coordenadora Cível"
          />
          <Colaboradores
            src={Jaqueline}
            name="Wanessa Belchior"
            text="Coordenadora Trabalhista"
          />
        </div>
      </Idealizadores> */}
      <Footer />
    </Container>
  );
}

export default App;

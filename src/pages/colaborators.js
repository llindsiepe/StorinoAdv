import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";

import {
  Container,
  Banner,
  Title,
  Idealizadores,
  DivColaboradores,
} from "../styles/Colaborators";

import Leopoldo from "../images/Leopoldo.png";
import Wanessa from "../images/Wanessa.png";
import Fernanda from "../images/Fernanda.png";

import Jaqueline from "../images/Jaqueline.png";

import PhotoAbout from "../images/photoAbout.png";
import LineTitle from "../images/LineTitle.png";

import Navbar from "../components/Navbar";
import Colaboradores from "../components/Colaboradores";
import Footer from "../components/Footer";

function Colaborators() {
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LineTitle} height="60rem" />
            <div style={{ marginLeft: "1rem" }}>
              <h3>Nossa equipe</h3>
              <h5>Conheça mais sobre quem somos</h5>
            </div>
          </div>
          <h6>
            Com profissionais capacitados, trazemos o que há de melhor no mundo
            jurídico, profissionais com pós graduações e em constante evolução,
            possuímos profissionais pós graduados em Direito Trabalhista e
            Processo do Trabalho, Processo Cível, Direito Civil, Direito de
            Família e Direito Previdenciário.
          </h6>
        </Title>
      </Banner>

      <Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={LineTitle} height="60rem" />
          <div style={{ marginLeft: "1rem" }}>
            <h3>Idealizadores</h3>
            <h5>Conheça os nossos idealizadores</h5>
          </div>
        </div>
      </Title>

      <Idealizadores>
        <DivColaboradores>
          <Colaboradores
            src={Leopoldo}
            name="Leopoldo de Souza Storino"
            text="Sócio Fundador"
            description="+ Leia mais"
          />
          <Colaboradores
            src={Jaqueline}
            name="Jaqueline de Souza Henrique"
            text="Sócia"
            description="+ Leia mais"
          />
          <Colaboradores
            src={Fernanda}
            name="Fernanda Fabri Ferreira"
            text="Coordenadora"
            description="+ Leia mais"
          />
        </DivColaboradores>
      </Idealizadores>

      <Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={LineTitle} height="60rem" />
          <div style={{ marginLeft: "1rem" }}>
            <h3>Colaboradores</h3>
            <h5>Conheça os nossos colaboradores</h5>
          </div>
        </div>
      </Title>

      <Idealizadores>
        <DivColaboradores>
          <Colaboradores
            src={Leopoldo}
            name="Wanessa Belchior"
            text="Advogada"
            description="+ Leia mais"
          />
          <Colaboradores
            src={Jaqueline}
            name="Patricia de Oliveira Ferreira"
            text="Advogada"
            description="+ Leia mais"
          />
          <Colaboradores
            src={Fernanda}
            name="Geraldo Storino Neto"
            text="Assistente Jurídico"
            description="+ Leia mais"
          />
        </DivColaboradores>
        <DivColaboradores>
          <Colaboradores
            src={Leopoldo}
            name="Marcia Cristina Sona"
            text="Gerente Financeira"
          />
          <Colaboradores
            src={Jaqueline}
            name="Giovana Ramos"
            text="Recepcionista"
          />
          <Colaboradores
            src={Fernanda}
            name="Ester Alves Tareto"
            text="Estagiária"
          />
        </DivColaboradores>
      </Idealizadores>

      <Footer />
    </Container>
  );
}

export default Colaborators;
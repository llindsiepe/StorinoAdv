import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";

import Button from "@mui/material/Button";

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
import Patricia from "../images/Patricia.png";
import Marcia from "../images/Marcia.png";
import Giovana from "../images/Giovana.png";
import Ester from "../images/Ester.png";

import PhotoAbout from "../images/photoAbout.png";
import LineTitle from "../images/LineTitle.png";

import Navbar from "../components/Navbar";
import Colaboradores from "../components/Colaboradores";
import Footer from "../components/Footer";
import ModalAbout from "../components/ModalAbout";

function Colaborators() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            handleOpen={handleOpen}
          />
          <Colaboradores
            src={Jaqueline}
            name="Jaqueline de Souza Henrique"
            text="Sócia"
            description="+ Leia mais"
            handleOpen={handleOpen}
          />
          <Colaboradores
            src={Fernanda}
            name="Fernanda Fabri Ferreira"
            text="Coordenadora"
            description="+ Leia mais"
            handleOpen={handleOpen}
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
            src={Wanessa}
            name="Wanessa Belchior"
            text="Advogada"
            description="+ Leia mais"
            handleOpen={handleOpen}
          />
          <Colaboradores
            src={Patricia}
            name="Patricia de Oliveira Ferreira"
            text="Advogada"
            description="+ Leia mais"
            handleOpen={handleOpen}
          />
          <Colaboradores
            src={Marcia}
            name="Marcia Cristina Sona"
            text="Gerente Financeira"
          />
        </DivColaboradores>
        <DivColaboradores>
          <Colaboradores
            src={Giovana}
            name="Giovana Ramos"
            text="Recepcionista"
          />
          <Colaboradores
            src={Ester}
            name="Ester Alves Tareto"
            text="Estagiária"
          />
        </DivColaboradores>
      </Idealizadores>

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <ModalAbout open={open} setOpen={setOpen} />

      <Footer />
    </Container>
  );
}

export default Colaborators;

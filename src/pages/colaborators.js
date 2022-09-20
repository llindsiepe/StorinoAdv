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
  const [information, setInformation] = React.useState({});

  const handleOpen = (name, text, src, about, email, oab) => {
    setInformation({
      name: name,
      text: text,
      src: src,
      about: about,
      email: email,
      oab: oab,
    });
    setOpen(true);
  };
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
            open={open}
            setOpen={setOpen}
            about="Graduado em Direito na Universidade Metropolitana do Estado de São Paulo – FIG UNIMESP. Pós graduado em Direito trabalhista pela faculdade Gama Filho. Professor da Faculdade Anhembi Morumbi de 2014 até 2016. Palestrante."
            email="l.storino@storino.adv.br"
            oab="OAB/SP 296.480"
          />
          <Colaboradores
            src={Jaqueline}
            name="Jaqueline de Souza Henrique"
            text="Sócia"
            description="+ Leia mais"
            handleOpen={handleOpen}
            open={open}
            setOpen={setOpen}
            about="Graduada em direito na Faculdade Metropolitanas Unidas. Pós-graduada em Direito de Família e Sucessões. Pós-graduanda em Direito Previdenciário."
            email="j.henrique@storino.adv.br"
            oab="OAB/SP 436.305"
          />
          <Colaboradores
            src={Fernanda}
            name="Fernanda Fabri Ferreira"
            text="Coordenadora"
            description="+ Leia mais"
            handleOpen={handleOpen}
            open={open}
            setOpen={setOpen}
            about="Graduada em Direito na Universidade Metropolitana do Estado de São Paulo – FIG UNIMESP. Pós graduada em Direito e Processo Civil. Pós graduada em Direito e Processo Previdenciário. Pós-graduanda em Família e Sucessões."
            email="f.fabri@storino.adv.br"
            oab="OAB/SP 449.413"
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
            open={open}
            setOpen={setOpen}
            about="Graduada em Direito na Universidade Nove de Julho - UNINOVE. Pós Graduanda em Direito e Processo do trabalho."
            email="w.belchior@storino.adv.br"
            oab="OAB/SP 468.759"
          />
          <Colaboradores
            src={Patricia}
            name="Patricia de Oliveira Ferreira"
            text="Advogada"
            description="+ Leia mais"
            handleOpen={handleOpen}
            open={open}
            setOpen={setOpen}
            about="Graduada em Psicologia - Faculdades Integradas de Ciências Humanas, Saúde e Educação de Guarulhos. Pós graduada em Docência no Ensino Superior - FIG UNIMESP. Graduada em Direito na Universidade Metropolitana do Estado de São Paulo – FIG UNIMESP. Pós-graduanda em Direito Previdenciário e Processo Previdenciário -   Faculdade Damásio."
            email=""
            oab="OAB – 469088"
          />
          <Colaboradores
            src={Marcia}
            name="Marcia Cristina Sona"
            text="Gerente Financeira"
            description="+ Leia mais"
            handleOpen={handleOpen}
            open={open}
            setOpen={setOpen}
            about="Graduada em Psicologia pela universidade de Guarulhos (UNG). Pós graduanda em Psicologia Jurídica e Forense pelo grupo IPEBEJ, Faculdade Volpe Miele (FVM). "
            email="financeiro@storino.adv.br"
          />
        </DivColaboradores>
        <DivColaboradores>
          <Colaboradores
            src={Giovana}
            name="Giovana Ramos"
            text="Recepcionista"
            description="+ Leia mais"
            handleOpen={handleOpen}
            open={open}
            setOpen={setOpen}
            about="Graduanda em Biomedicina na UNIVERSIDADE CRUZEIRO DO SUL."
            email="recepcao@storino.adv.br"
          />
          <Colaboradores
            src={Ester}
            name="Ester Alves Tareto"
            text="Estagiária"
            description="+ Leia mais"
            handleOpen={handleOpen}
            open={open}
            setOpen={setOpen}
            about="Graduanda em Direito na Universidade Metropolitana do Estado de São Paulo – FIG UNIMESP."
            email="e.tareto@storino.adv.br"
          />
        </DivColaboradores>
      </Idealizadores>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <ModalAbout open={open} setOpen={setOpen} information={information} />

      <Footer />
    </Container>
  );
}

export default Colaborators;

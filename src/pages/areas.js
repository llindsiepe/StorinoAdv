import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";

import {
  Container,
  Banner,
  Title,
  TextAreaAtuacao,
  Line,
} from "./styles/Areas";

import PhotoAbout from "./images/photoAbout.png";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Areas() {
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
          <h3>Áreas de atuação</h3>
          <h5>Conheça mais sobre onde atuamos</h5>
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

      <TextAreaAtuacao>
        <h3>Trabalhista</h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
          penatibus et id volutpat massa. In aliquet amet, porta faucibus
          venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
          volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
          vitae leo amet fames nunc, fames.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Cível</h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
          penatibus et id volutpat massa. In aliquet amet, porta faucibus
          venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
          volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
          vitae leo amet fames nunc, fames.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Consumidor</h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
          penatibus et id volutpat massa. In aliquet amet, porta faucibus
          venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
          volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
          vitae leo amet fames nunc, fames.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Previdenciário</h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
          penatibus et id volutpat massa. In aliquet amet, porta faucibus
          venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
          volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
          vitae leo amet fames nunc, fames.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Família e sucessões</h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
          penatibus et id volutpat massa. In aliquet amet, porta faucibus
          venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
          volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
          vitae leo amet fames nunc, fames.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Empresarial</h3>
        <h6 style={{ marginBottom: "12rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
          ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
          penatibus et id volutpat massa. In aliquet amet, porta faucibus
          venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
          volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
          vitae leo amet fames nunc, fames.
        </h6>
      </TextAreaAtuacao>

      <Footer />
    </Container>
  );
}

export default Areas;

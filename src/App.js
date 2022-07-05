import React from "react";

import Icon from "./images/Icon.png";
import Photo from "./images/photo.png";

import {
  Container,
  Banner,
  OptionBanner,
  ButtonMain,
  ButtonSecondary,
  Cards,
  AboutUs,
  Title,
} from "./styles.js";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <Container>
      <Navbar />
      <Banner>
        <h1>
          Experiência e dedicação é o que
          <br />
          <b>nos prepara para nossos casos.</b>
        </h1>
        <h5>Com mais de 10 anos de mercado, sabemos como e quando agir.</h5>
        <OptionBanner>
          <ButtonMain>Áreas de atuação</ButtonMain>
          <ButtonSecondary>Fale conosco</ButtonSecondary>
        </OptionBanner>
      </Banner>
      <Cards>
        <Card
          name="Proatividade"
          src={Icon}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget enim a pretium, luctus proin pulvinar. Parturient ac rhoncus vestibulum, massa sed mi."
        />
        <Card
          name="Proatividade"
          src={Icon}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget enim a pretium, luctus proin pulvinar. Parturient ac rhoncus vestibulum, massa sed mi."
        />
        <Card
          name="Proatividade"
          src={Icon}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget enim a pretium, luctus proin pulvinar. Parturient ac rhoncus vestibulum, massa sed mi."
        />
      </Cards>
      <AboutUs style={{ display: "flex" }}>
        <img src={Photo} width="550" />
        <Title>
          <h3>O Escritório</h3>
          <h5>Conheça mais sobre quem somos</h5>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
            ridiculus massa bibendum arcu nunc arcu. Volutpat bibendum est mi
            penatibus et id volutpat massa. In aliquet amet, porta faucibus
            venenatis. Id sed bibendum scelerisque adipiscing posuere nam nec
            volutpat tortor. Proin morbi purus felis pharetra. Morbi fermentum
            vitae leo amet fames nunc, fames. Erat maecenas nulla iaculis arcu
            magna ut varius rutrum feugiat. Eget mauris elit risus amet. In
            tellus venenatis eu eu. Tortor diam lacus, eget amet tempus et,
            dictum ultricies nisi. Tempor et vel enim euismod in venenatis, quis
            tristique. Id neque porttitor nam pharetra, elementum vitae. Magna
            ipsum tortor tempus tincidunt lacinia posuere. Id amet, feugiat
            habitasse mattis consectetur nunc at. Suscipit at dui tincidunt
            scelerisque dolor. In vulputate consequat sit sit fermentum orci eu
            lacus. Lacus sagittis tortor suspendisse sed. Vel, fermentum
            scelerisque imperdiet ultricies convallis leo cursus.
          </h6>
        </Title>
      </AboutUs>
    </Container>
  );
}

export default App;

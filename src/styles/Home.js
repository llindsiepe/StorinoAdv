import styled from "styled-components";

import Image from "../images/Banner.png";

export const Container = styled.div`
  margin: -8px;
`;

export const OptionBanner = styled.div`
  display: flex;
  margin-top: 2%;
`;

export const ButtonMain = styled.div`
  width: 20rem;
  height: 2rem;
  background: #d9d9d9;
  color: #373737;
  text-align: center;
  border-radius: 6px;
  padding-top: 0.5rem;
  margin-right: auto;
  margin-left: auto;
`;

export const ButtonSecondary = styled.div`
  width: 210px;
  height: 44px;
  border: 2px solid #d9d9d9;
  color: #d9d9d9;
  text-align: center;
  border-radius: 6px;
  margin-right: auto;
`;

export const Banner = styled.div`
  background-image: url(${Image});
  width: 100%;
  height: 40rem;
  color: white;
  margin-top: -25px;
  h1 {
    padding-top: 12rem;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 1.5rem;
    }
  }
  h5 {
    padding-top: 0.2rem;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 0.7rem;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: inline-block;
  }
`;

export const AboutUs = styled.div`
  margin-left: 10%;
  margin-top: 10%;
  display: flex;

  img {
    @media (max-width: 720px) {
      width: 82%;
    }
  }

  @media (max-width: 720px) {
    display: inline-block;
  }
`;

export const Title = styled.div`
  margin-left: 10%;

  @media (max-width: 720px) {
    margin-left: 0%;
    margin-top: 5%;
  }

  img {
    @media (max-width: 720px) {
      width: 1%;
    }
  }

  h3 {
    color: #373737;
  }
  h5 {
    color: #9a9a9a;
    margin-top: -8%;
  }
  h6 {
    width: 70%;
    font-weight: 400;
    font-size: 1rem;
    color: #373737;
    text-align: justify;

    @media (max-width: 720px) {
      width: 82%;
    }
  }
`;

export const Expertise = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15%;
  margin-bottom: 15%;

  @media (max-width: 720px) {
    display: inline-block;
    margin-left: 10%;
  }
`;

export const CardsExpertise = styled.div`
  margin-left: 15%;
  display: flex;

  @media (max-width: 720px) {
    display: inline-block;
    margin-left: 0%;
  }
`;

export const Idealizadores = styled.div``;

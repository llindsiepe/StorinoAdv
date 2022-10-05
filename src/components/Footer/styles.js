import * as React from "react";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #373737;

  @media (max-width: 720px) {
    height: 30rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    display: block;
  }
`;

export const Law = styled.h6`
  color: white;
  margin-top: 2%;
  text-align: center;

  @media (max-width: 720px) {
    margin-top: 10%;
  }
`;

export const Info = styled.div`
  margin-left: 5%;
`;

export const Redes = styled.div`
  margin-top: 4rem;
  color: white;

  h6 {
    margin-left: 0.5rem;
  }

  @media (max-width: 720px) {
    padding-top: 0.5rem;
  }
`;

export const AboutUs = styled.div`
  color: white;
  margin-top: 2.5rem;

  h5 {
    width: 80%;
    text-align: justify;
  }

  @media (max-width: 720px) {
    margin-left: 5%;
    margin-bottom: 10%;
  }
`;

export const ButtonSecondary = styled.a`
  width: 16rem;
  padding: 0.5rem;
  border: 2px solid white;
  color: white;
  text-align: center;
  border-radius: 6px;
  margin-right: 5%;
  text-decoration: none;

  @media (max-width: 720px) {
    margin-left: 5%;
  }
`;

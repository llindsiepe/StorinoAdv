import styled from "styled-components";

export const Container = styled.div`
  margin: -8px;
`;

export const Banner = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 4rem;

  img {
    @media (max-width: 720px) {
      width: 82%;
    }
  }

  @media (max-width: 720px) {
    display: inline-block;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.div`
  margin-left: 10%;
  margin-top: auto;
  margin-bottom: 5rem;

  @media (max-width: 720px) {
    margin-left: 10%;
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
    width: 85%;
    font-weight: 400;
    font-size: 0.8rem;
    color: #373737;
    text-align: justify;
  }
`;

export const Line = styled.hr`
  border: 0.5px solid #9a9a9a;
  margin-bottom: 4rem;
`;

export const Idealizadores = styled.div`
  margin-bottom: 4rem;
`;

export const DivColaboradores = styled.div`
  display: flex;
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: inline;
    margin-top: 0%;
    margin-right: 0%;
    margin-left: 0%;
  }
`;

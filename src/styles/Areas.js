import styled from "styled-components";

export const Container = styled.div`
  margin: -8px;
`;

export const Banner = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 6rem;

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

    @media (max-width: 720px) {
      width: 90%;
    }
  }
`;

export const TextAreaAtuacao = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 4rem;
  text-align: justify;

  h3 {
    color: #373737;
  }
  h6 {
    color: #9a9a9a;
    font-weight: 400;
  }
`;

export const Line = styled.hr`
  border: 0.5px solid #9a9a9a;
  margin-bottom: 4rem;
`;

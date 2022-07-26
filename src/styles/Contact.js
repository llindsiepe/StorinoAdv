import styled from "styled-components";

export const Container = styled.div`
  margin: -8px;
`;

export const Contato = styled.div`
  margin-top: 4rem;
  margin-bottom: 10rem;
  width: 100%;

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
    margin-bottom: 10%;
  }
  h5 {
    color: #9a9a9a;
    margin-top: -8%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: inline;
  }
`;

export const Options = styled.div`
  margin-left: 10%;
`;

export const OptionsRedes = styled.div`
  margin-left: 10%;
  margin-bottom: -1rem;

  @media (max-width: 720px) {
    width: 20%;
    display: flex;
  }
`;

export const ButtonSecondary = styled.div`
  width: 20rem;
  height: 2rem;
  border: 2px solid #373737;
  color: #373737;
  text-align: center;
  font-size: 0.8rem;
  padding-top: 0.8rem;
  border-radius: 6px;
  margin-right: 5%;
  margin-bottom: 1rem;
`;

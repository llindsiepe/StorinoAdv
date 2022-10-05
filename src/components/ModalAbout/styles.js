import styled from "styled-components";

export const Title = styled.div`
  margin-left: 10%;

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
    font-weight: 400;
  }
  h6 {
    width: 70%;
    font-weight: 400;
    font-size: 0.8rem;
    color: #373737;
    text-align: justify;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 720px) {
    display: block;
    margin-bottom: 0.5rem;

    h3 {
      font-size: 1rem;
    }
  }
`;

export const TextModal = styled.div`
  h6 {
    font-weight: 400;
    color: #373737;
    text-align: justify;
  }
`;

export const CloseModal = styled.div`
  text-align: right;
  margin-top: -2rem;
  margin-right: -2rem;

  button {
    width: 4rem;
    height: 4rem;
    border: none;
    background: none;
  }
`;

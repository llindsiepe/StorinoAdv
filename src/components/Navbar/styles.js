import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 90px;
  background-color: #373737;
  display: flex;
  justify-content: space-between;

  font-family: Poppins;
`;

export const LogotipoImage = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10%;

  img {
    @media (max-width: 720px) {
      width: 3rem;
      height: 3rem;
      margin-left: -2rem;
      margin-right: 1rem;
    }
  }
`;

export const Menu = styled.div`
  gap: 2rem;
  display: flex;

  @media (max-width: 720px) {
    gap: 0.2rem;
  }
`;

export const Acess = styled.div`
  display: flex;
  color: white;
  align-items: center;
  gap: 1rem;
  margin-right: 10%;

  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 720px) {
    gap: 0.5rem;
    margin-left: 0.2rem;
    margin-right: 5%;

    img {
      width: 0.8rem;
      height: 0.8rem;
    }
    h6 {
      font-size: 0.4rem;
    }
  }
`;

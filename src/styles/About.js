import styled from "styled-components";

export const Container = styled.div`
  margin: -8px;
`;

export const Banner = styled("div")`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 10rem;

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

export const Title = styled("div")`
  margin-left: 10%;
  margin-top: auto;
  margin-bottom: 5rem;

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
    font-size: 0.8rem;
    color: #373737;
    text-align: justify;

    @media (max-width: 720px) {
      width: 90%;
    }
  }

  @media (max-width: 720px) {
    margin-left: 10%;
    margin-top: 10%;
  }

  img {
    @media (max-width: 720px) {
      width: 1%;
    }
  }
`;

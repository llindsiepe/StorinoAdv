import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #373737;
  padding: 2rem;

  width: 300px;
  height: 150px;
  margin-top: -60px;

  background: #fafafa;
  border-radius: 6px;

  @media (max-width: 720px) {
    margin-bottom: 5rem;
  }
`;

export const TextCard = styled.div`
  h6 {
    text-align: "justify";
  }
`;

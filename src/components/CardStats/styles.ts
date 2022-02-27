import styled from "styled-components";
import { DisplayStyles, BaseStyles } from "../../styles/Text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1.5rem 2rem 2rem;
  border-radius: 0.375rem;
  background-color: ${(props) => {
    return props.color;
  }};
  box-shadow: 0px 2px 3px 0px hsla(0, 0%, 0%, 0.13);
  transition: box-shadow 100ms ease-in-out;

  &:hover {
    box-shadow: 0px 8px 21px 0px hsla(0, 0%, 0%, 0.13);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Amount = styled.h2`
  ${DisplayStyles}
  color: ${(props) => {
    return props.color;
  }};
`;

export const CardTitle = styled.span`
  ${BaseStyles}
  color: ${(props) => {
    return props.color;
  }};
`;

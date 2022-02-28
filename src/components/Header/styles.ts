import styled from "styled-components";
import { BaseStyles } from "../../styles/Text";

export const Container = styled.header`
  min-height: 212px;
  padding: 0 1.5rem;
  background-color: var(--accent-purple);
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 0;

  button {
    padding: 1rem 1.5rem;
    border-radius: 0.375rem;
    border: none;
    background-color: var(--accent-container-purple-primary);

    ${BaseStyles}
    color: var(--on-surface-inverted);

    transition: background-color 100ms ease-in-out;

    &:hover {
      background-color: var(--accent-container-purple-secondary);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

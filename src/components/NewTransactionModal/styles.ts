import styled from "styled-components";
import { TitleStyles, BaseStyles } from "../../styles/Text";

export const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--on-surface-primary);

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 0.375rem;
    border: none;
    background-color: var(--surface-primary);

    transition: background-color 100ms ease-in-out;

    &:hover {
      background-color: var(--surface-secondary);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  h2 {
    ${TitleStyles}
  }

  .inputs-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    max-height: 66px;
    padding: 1rem;
    border: solid 1px var(--outline-primary);
    border-radius: 0.375rem;
    background-color: var(--surface-secondary);

    ${BaseStyles}

    &::placeholder {
      color: var(--on-surface-tertiary);
    }

    &:active,
    &:focus-visible {
      outline-color: var(--accent-container-purple-primary);
    }
  }

  button[type="submit"] {
    padding: 1.5rem;
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

export const TransactionTypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

interface RadioBoxProps {
  isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: solid 1px var(--outline-primary);
  background-color: var(--surface-primary);

  ${BaseStyles}
  font-weight: bold;
  color: var(--on-surface-primary);

  transition: background-color 100ms ease-in-out;

  &.income {
    border-color: ${(props) =>
      props.isActive ? "var(--accent-green)" : "var(--outline-primary)"};
    background-color: ${(props) =>
      props.isActive
        ? "var(--accent-surface-green)"
        : "var(--surface-primary)"};
  }

  &:hover.income {
    border-color: var(--accent-green);
    background-color: var(--accent-surface-green);
  }

  &.expenses {
    border-color: ${(props) =>
      props.isActive ? "var(--accent-red)" : "var(--outline-primary)"};
    background-color: ${(props) =>
      props.isActive ? "var(--accent-surface-red)" : "var(--surface-primary)"};
  }

  &:hover.expenses {
    border: solid 1px var(--accent-red);
  }

  &:active {
    transform: scale(0.98);
  }
`;

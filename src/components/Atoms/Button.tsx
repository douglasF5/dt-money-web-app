import styled from "styled-components";

type ButtonProps = {
  label: string;
};

const ButtonStyled = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  background-color: var(--accent-container-purple-primary);

  font-size: 1rem;
  font-weight: bold;
  line-height: 100%;
  color: var(--on-surface-inverted);

  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: var(--accent-container-purple-secondary);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export function Button(props: ButtonProps) {
  return <ButtonStyled>{props.label}</ButtonStyled>;
}

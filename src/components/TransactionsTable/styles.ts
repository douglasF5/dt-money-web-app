import styled from "styled-components";
import { BaseStyles } from "../../styles/Text";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.375rem;
    color: var(--on-surface-secondary);
  }

  th {
    padding: 1rem;
    text-align: left;
    color: var(--on-surface-quaternary);
    ${BaseStyles}

    &:last-child {
      text-align: right;
    }
  }

  tbody tr {
    position: relative;
    z-index: 1;
    transition: box-shadow 100ms ease-in-out;

    &:hover {
      z-index: 2;
      box-shadow: 0px 8px 21px 0px hsla(0, 0%, 0%, 0.13);
    }
  }

  td {
    background-color: var(--surface-primary);
    padding: 1rem;

    ${BaseStyles}

    &:first-child {
      border-radius: 0.375rem 0 0 0.375rem;
    }

    &:nth-child(2) {
      color: var(--on-surface-tertiary);
    }

    &:last-child {
      border-radius: 0 0.375rem 0.375rem 0;
      text-align: right;
    }

    span {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      background-color: var(--surface-secondary);
      border-radius: 1rem;
    }
  }
`;

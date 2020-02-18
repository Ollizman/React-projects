import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 15px;
  border: 3px solid darkgreen;
  color: lightgreen;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      border-radius: 7px;
      border: 2px solid darkgreen;
      color: white;
      font-weight: bold;
      width: 120px;
    `};
  ${props =>
    props.counter &&
    css`
      border: hidden;
      border-radius: 50px;
      color: black;
    `};
`;
export { Button };

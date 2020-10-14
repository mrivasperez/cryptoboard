import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      color: #fec7ff;
      text-shadow: 0px 0px 60px #fff;
    `}
`;

function ControlButton({ name, active }) {
  return (
    <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
  );
}

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoBoard</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}

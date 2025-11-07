"use client";

import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 40px;
  border-top: 1px solid #e5e5e5;
  font-size: 12px;
  color: #777777;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export function Footer() {
  return (
    <FooterContainer>© {new Date().getFullYear()} Music Book</FooterContainer>
  );
}

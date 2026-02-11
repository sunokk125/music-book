"use client";

import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #ffffff;
`;

const Logo = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #555555;
`;

const NavButton = styled.button`
  padding: 6px 8px;
  border-radius: 6px;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>Music Book</Logo>
      </Link>
      <Nav>
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </Nav>
    </HeaderContainer>
  );
}

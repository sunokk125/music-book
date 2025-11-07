"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "@/components/organisms/Header/Header";
import { Sidebar } from "@/components/organisms/SideBar/SideBar";
import { Footer } from "@/components/organisms/Footer/Footer";
import { GlobalStyle } from "@/styles/global-style";

type MainLayoutProps = {
  children: ReactNode;
};

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  min-height: 0;
`;

const Content = styled.main`
  flex: 1;
  padding: 24px;
  background-color: #ffffff;
  overflow: auto;
`;

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <AppContainer>
      {/* 전역 스타일 */}
      <GlobalStyle />

      {/* 상단 헤더 */}
      <Header />

      {/* 왼쪽 사이드 + 오른쪽 본문 */}
      <Body>
        <Sidebar />
        <Content>{children}</Content>
      </Body>

      {/* 하단 푸터 */}
      <Footer />
    </AppContainer>
  );
}

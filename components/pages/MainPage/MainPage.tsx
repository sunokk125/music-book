"use client";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
`;

export function MainPage() {
  return (
    <section>
      <Title>대시보드</Title>
      <Description>
        최근에 들은 음악, 플레이리스트, 추천 등을 여기에서 한눈에 볼 수 있도록
        만들면 돼.
      </Description>

      {/* 아래는 일단 레이아웃 테스트용 더미 블럭 */}
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        }}
      >
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            border: "1px solid #eee",
            background: "#fafafa",
          }}
        >
          최근 재생
        </div>
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            border: "1px solid #eee",
            background: "#fafafa",
          }}
        >
          내 플레이리스트
        </div>
        <div
          style={{
            padding: 16,
            borderRadius: 12,
            border: "1px solid #eee",
            background: "#fafafa",
          }}
        >
          추천 음악
        </div>
      </div>
    </section>
  );
}

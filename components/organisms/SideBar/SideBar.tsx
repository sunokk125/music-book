"use client";

import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const SidebarContainer = styled.aside`
  width: 220px;
  border-right: 1px solid #e5e5e5;
  padding: 24px 16px;
  background-color: #fafafa;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`;

const MenuItem = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 8px 10px;
  border-radius: 6px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#333333")};
  background-color: ${({ $active }) => ($active ? "#2563eb" : "transparent")};

  &:hover {
    background-color: ${({ $active }) => ($active ? "#1d4ed8" : "#f0f0f0")};
  }
`;

const menu = [
  { label: "홈", href: "/" },
  { label: "채널", href: "/channel" },
  { label: "팔로우", href: "/follow" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <MenuList>
        {menu.map((item) => (
          <MenuItem
            key={item.href}
            href={item.href}
            $active={pathname === item.href}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </SidebarContainer>
  );
}

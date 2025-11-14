"use client";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Theme = "light" | "dark";

type UIState = {
  sidebarOpen: boolean;
  theme: Theme;
  toggleSidebar: () => void;
  setTheme: (theme: Theme) => void;
};

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set) => ({
        sidebarOpen: true,
        theme: "light",
        toggleSidebar: () =>
          set((state) => ({ sidebarOpen: !state.sidebarOpen })),
        setTheme: (theme) => set({ theme }),
      }),
      { name: "ui-store" } // localStorage key
    )
  )
);

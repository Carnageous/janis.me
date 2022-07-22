import create from "zustand";

export interface UIStore {
  headerGlitch: boolean;
  setHeaderGlitch: (headerGlitch: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  headerGlitch: false,
  setHeaderGlitch: (headerGlitch) =>
    set((state) => ({ ...state, headerGlitch })),
}));

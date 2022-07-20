import create from "zustand";

export interface UIStore {
  makeItRain: boolean;
  setMakeItRain: (makeItRain: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  makeItRain: false,
  setMakeItRain: (makeItRain) => set((state) => ({ ...state, makeItRain })),
}));

import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isActive: false,
  changeActive: () => set((state) => ({ isActive: !state.isActive })),
}));

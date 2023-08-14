import { create } from "zustand";


type menuToggle = {
    menuToggled: boolean;
    setIsMenuToggled: () => void;
}

export const useMenuToggle = create<menuToggle>((set) => ({
    menuToggled: false,
    setIsMenuToggled:() => set((state) =>  ({menuToggled: !state.menuToggled}))
  
}))




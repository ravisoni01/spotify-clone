import { create } from "zustand";

interface PlayerStore {
  ids: string[];
  acitveId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  acitveId: undefined,
  setId: (id: string) => set({ acitveId: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ ids: [], acitveId: undefined }),
}));

export default usePlayer;

import { create } from "zustand";
import { HouseType } from "../types";

interface HouseState {
    house: HouseType[];
    setHouse: (data: HouseType[]) => void;
}

export const useHouseStore = create<HouseState>((set) => ({
    house: [],
    setHouse: (data) => set({ house: data }),
}));

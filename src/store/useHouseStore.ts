import { create } from "zustand";

interface Tag {
    tagId: number;
    tag: string;
}

interface House {
    postId: number;
    title: string;
    description: string;
    location: string;
    recruitment: string;
    latitude: string;
    longitude: string;
    imageUrl: string;
    concept: string;
    tagEntities: Tag[];
}

interface HouseStore {
    houses: House[];
    setHouses: (houses: House[]) => void;
}

export const useHouseStore = create<HouseStore>((set) => ({
    houses: [],
    setHouses: (houses) => set({ houses }),
}));

import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery{
    genre_id?: number ;
    platform_id?: number;
    order?: string;
    search?: string; 
}

interface GameQueries{
    game_query: GameQuery;
    setSearch: (search: string) => void;
    setGenreId: (genre_id: number) => void;
    setPlatformId: (platform_id: number) => void;
    setOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueries>((set) => ({
    game_query: {},
    setSearch: (search) => set(() => (
        { game_query: {search} }
    )),
    setGenreId: (genre_id) => set((state) => (
        { game_query: {...state.game_query, genre_id} }
    )),
    setPlatformId: (platform_id) => set((state) => (
        { game_query: {...state.game_query, platform_id} }
    )),
    setOrder: (order) => set((state) => (
        { game_query: {...state.game_query, order} }
    )),
}));

if(process.env.NODE_ENV === "development"){
    mountStoreDevtool("Game Query Store", useGameQueryStore);
}

export default useGameQueryStore;
import useData from "./useData.hook";

export interface Genre{
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>("genres");

export default useGenres;
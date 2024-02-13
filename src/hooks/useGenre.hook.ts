import genres from "../assets/genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: genres, is_loading: false, error: null});

export default useGenres;
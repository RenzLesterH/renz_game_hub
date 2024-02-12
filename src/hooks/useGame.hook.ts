import useData from "./useData.hook";
import { Genre } from "./useGenre.hook";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = (selected_genre: Genre | null) => 
    useData<Game>("games", { params: { genres: selected_genre?.id}}, [selected_genre?.id]);

export default useGames;
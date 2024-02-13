import { GameQuery } from "../App";
import useData from "./useData.hook";

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

const useGames = (game_query: GameQuery) => 
    useData<Game>(
        "games", 
        { 
            params: { 
                genres: game_query.genre?.id, 
                platforms: game_query.platform?.id, 
                ordering: game_query.order
            }
        }, [game_query]
    );

export default useGames;
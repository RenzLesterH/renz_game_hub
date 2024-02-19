import { useQuery } from '@tanstack/react-query';
import { Platform } from "../services/platform.service";
import gameService from "../services/game.service";
import { GameQuery } from '../App';

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = (game_query: GameQuery) => {
    return useQuery<Game[], Error>({
        queryKey: ["games", game_query],
        queryFn: () => gameService.getAll(
            { 
                params: { 
                    genres: game_query.genre?.id, 
                    parent_platforms: game_query.platform?.id, 
                    ordering: game_query.order,
                    search: game_query.search,
                }
            }),
    });
};
      

export default useGames;
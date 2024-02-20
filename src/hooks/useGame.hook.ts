import { useInfiniteQuery } from '@tanstack/react-query';
import { Platform } from "../services/platform.service";
import gameService from "../services/game.service";
import { GameQuery } from '../App';
import ms from 'ms';

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = (game_query: GameQuery) => {
    return useInfiniteQuery<Game[], Error>({
        queryKey: ["games", game_query],
        queryFn: ({pageParam = 1}) => gameService.getAll(
            { 
                params: { 
                    genres: game_query.genre_id, 
                    parent_platforms: game_query.platform_id, 
                    ordering: game_query.order,
                    search: game_query.search,
                    page: pageParam,
                }
            }),
        getNextPageParam: (last_page, all_pages) => {
            return last_page.length > 0 ? all_pages.length + 1 : undefined;
        },
        staleTime: ms("24h"),
    });
};
      

export default useGames;
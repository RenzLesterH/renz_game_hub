import { useInfiniteQuery } from '@tanstack/react-query';
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
    return useInfiniteQuery<Game[], Error>({
        queryKey: ["games", game_query],
        queryFn: ({pageParam = 2}) => gameService.getAll(
            { 
                params: { 
                    genres: game_query.genre?.id, 
                    parent_platforms: game_query.platform?.id, 
                    ordering: game_query.order,
                    search: game_query.search,
                    page: (pageParam - 1) * game_query.page_size,
                    page_size: game_query.page_size,
                }
            }),
        keepPreviousData: true,
        getNextPageParam: (last_page, all_pages) => {
            return last_page.length > 0 ? all_pages.length + 1 : undefined;
        }
    });
};
      

export default useGames;
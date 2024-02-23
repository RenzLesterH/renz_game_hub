import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import gameService from '../services/game.service';

const useGameDetails = (slug: string) => {
    return useQuery({
        queryKey: ["games", slug],
        queryFn: () => gameService.get(slug),
        staleTime: ms("24h"),
    });
};

export default useGameDetails;
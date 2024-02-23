import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/apiClient.service';
import { Trailer } from '../entities/Trailer';


const useGameTrailer = (game_id: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${game_id}/movies`);

    return useQuery({
        queryKey: ["trailers", game_id],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
    });
};

export default useGameTrailer;
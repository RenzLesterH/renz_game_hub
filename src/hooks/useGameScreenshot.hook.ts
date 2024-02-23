import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/apiClient.service';
import Screenshot from '../entities/Screenshot';

const useGameScreenshot = (game_id: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${game_id}/screenshots`);

    return useQuery({
        queryKey: ["screenshots", game_id],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
    });
};

export default useGameScreenshot;
import { useQuery } from '@tanstack/react-query';
import genreService, { Genre } from "../services/genre.service";
import genres from '../assets/genres';
import ms from 'ms';

const useGenres = () => {
    return useQuery<Genre[], Error>({
      queryKey: ["genres"],
      queryFn: genreService.getAll,
      staleTime: ms("24h"),
      initialData: genres
    });
};

export default useGenres;
import { useQuery } from '@tanstack/react-query';
import genreService from "../services/genre.service";
import { Genre } from "../entities/Genre";
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
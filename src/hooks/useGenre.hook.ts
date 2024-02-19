import { useQuery } from '@tanstack/react-query';
import genreService, { Genre } from "../services/genre.service";
import genres from '../assets/genres';

const useGenres = () => {
    return useQuery<Genre[], Error>({
      queryKey: ["genres"],
      queryFn: genreService.getAll,
      staleTime: 24 * 60 * 60 * 100,
      initialData: genres
    });
  };
  


export default useGenres;

import { useQuery } from '@tanstack/react-query';
import platformService, {Platform} from '../services/platform.service';
import platforms from '../assets/platforms';

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 100,
    initialData: platforms
  });
};

export default usePlatforms;
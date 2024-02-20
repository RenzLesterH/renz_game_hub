
import { useQuery } from '@tanstack/react-query';
import platformService, {Platform} from '../services/platform.service';
import platforms from '../assets/platforms';
import ms from 'ms';

const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms("24h"),
    initialData: platforms
  });
};

export default usePlatforms;
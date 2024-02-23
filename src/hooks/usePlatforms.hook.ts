
import { useQuery } from '@tanstack/react-query';
import platformService from '../services/platform.service';
import { Platform } from "../entities/Platform";
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
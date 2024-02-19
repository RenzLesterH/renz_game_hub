import APIClient from "./apiClient.service";
import { Platform } from "./platform.service";

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

export default new APIClient<Game>("/games");
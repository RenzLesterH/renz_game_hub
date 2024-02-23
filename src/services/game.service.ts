import { Game } from '../entities/Game';
import APIClient from "./apiClient.service";

export default new APIClient<Game>("/games");
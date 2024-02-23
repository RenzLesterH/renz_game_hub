import { Game } from "../hooks/useGame.hook";
import APIClient from "./apiClient.service";

export default new APIClient<Game>("/games");
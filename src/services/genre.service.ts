import { Genre } from "../entities/Genre";
import APIClient from "./apiClient.service";

export default new APIClient<Genre>("/genres");
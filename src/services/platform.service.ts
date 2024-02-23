import { Platform } from "../entities/Platform";
import APIClient from "./apiClient.service";

export default new APIClient<Platform>("/platforms/lists/parents");
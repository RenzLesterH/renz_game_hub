import APIClient from "./apiClient.service";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

export default new APIClient<Genre>("/genres");
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Game{
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] =  useState("");

    useEffect(()=>{
        apiClient.get<FetchGameResponse>("/games")
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    });

    return (
        <>
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => <li>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid;
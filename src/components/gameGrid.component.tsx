import useGames from "../hooks/useGame.hook";

const GameGrid = () => {
    const {games, error } = useGames();    

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
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame.hook";
import GameCard from "./gameCard.component";
import GameCardSkeleton from "./gameCardSkeleton.component";
import GameCardContainer from "./gameCardContainer.component";

const GameGrid = () => {
    const {data, error, is_loading } = useGames();
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];     

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} padding="10px">
                {is_loading && skeletons.map(skeleton => (
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton}/>
                    </GameCardContainer>
                ))}
                {data.map(game => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;
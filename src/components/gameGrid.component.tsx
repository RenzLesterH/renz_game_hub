import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame.hook";
import GameCard from "./gameCard.component";
import GameCardSkeleton from "./gameCardSkeleton.component";
import GameCardContainer from "./gameCardContainer.component";
import { GameQuery } from "../App";

interface Props {
    game_query: GameQuery
}

const GameGrid = ({game_query}: Props) => {
    const {data, error, is_loading } = useGames(game_query);
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if(error) return <Text>{error}</Text>;

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} padding="10px">
            {(is_loading) 
                ? skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                ))
                : data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))
            }
        </SimpleGrid>
    )
}

export default GameGrid;
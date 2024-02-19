import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame.hook";
import GameCard from "./gameCard.component";
import GameCardSkeleton from "./gameCardSkeleton.component";
import GameCardContainer from "./gameCardContainer.component";
import { GameQuery } from "../App";
import React from "react";

interface Props {
    game_query: GameQuery;
}

const GameGrid = ({game_query}: Props) => {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames({...game_query, page_size: 8});
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if(error) return <Text>{error.message}</Text>;

    return (
        <Box padding="10px">
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
                {(isLoading && !data) 
                    ? skeletons.map(skeleton => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton/>
                        </GameCardContainer>
                    ))
                    : data?.pages?.map((page_data, index) => (
                        <React.Fragment key={index}>
                            {page_data?.map(game => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game}/>
                                </GameCardContainer>
                            ))}
                        </React.Fragment>  
                      ))
                }
            </SimpleGrid>
            {hasNextPage && 
                <Button my={3} disabled={isFetchingNextPage} onClick={()=>fetchNextPage()}>{(isFetchingNextPage) ? "Loading..." : "Load More"}</Button>
            }
        </Box>

    )
}

export default GameGrid;
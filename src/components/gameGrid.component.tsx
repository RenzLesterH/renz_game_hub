import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame.hook";
import GameCard from "./gameCard.component";
import GameCardSkeleton from "./gameCardSkeleton.component";
import GameCardContainer from "./gameCardContainer.component";
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

const GameGrid = () => {
    const {data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if(error) return <Text>{error.message}</Text>;

    return (
        <InfiniteScroll
            dataLength={data?.pages[0]?.length || 0 }
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner/>}
        >
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} padding="10px">
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
            {/* {hasNextPage && 
                <Button my={3} disabled={isFetchingNextPage} onClick={()=>fetchNextPage()}>{(isFetchingNextPage) ? "Loading..." : "Load More"}</Button>
            } */}
        </InfiniteScroll>
    )
}

export default GameGrid;
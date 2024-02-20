import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navBar.component';
import GameGrid from './components/gameGrid.component';
import GenreList from './components/genreList.component';
import { useState } from 'react';
import PlatformSelector from './components/platformSelector.component';
import SortSelector from './components/sortSelector.component';
import GameHeading from './components/gameHeading.componenet';

export interface GameQuery{
  genre_id?: number ;
  platform_id?: number;
  order: string;
  search: string;
  page_size: number; 
}

function App() {
  const [game_query, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr"
          }}
      >
            <GridItem area="nav">
                <NavBar onSearch={(search)=> setGameQuery({...game_query, search})} />
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                  <GenreList selected_genre_id={game_query.genre_id} setSelectedGenre = {(genre)=> setGameQuery({...game_query, genre_id: genre.id})} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                  <GameHeading game_query={game_query}/>
                  <Flex marginBottom={5}>
                      <Box marginRight={5}>
                        <PlatformSelector selected_platform_id={game_query.platform_id} setSelectedPlatform={(platform)=> setGameQuery({...game_query, platform_id: platform.id})}/>
                      </Box>
                      <SortSelector setOrder={(order)=> setGameQuery({...game_query, order})}/>
                  </Flex>
                </Box>
                <GameGrid game_query={game_query}/>
            </GridItem>
      </Grid>
    </>
  )
}

export default App

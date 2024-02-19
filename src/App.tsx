import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navBar.component';
import GameGrid from './components/gameGrid.component';
import GenreList from './components/genreList.component';
import { useState } from 'react';
import PlatformSelector from './components/platformSelector.component';
import SortSelector from './components/sortSelector.component';
import GameHeading from './components/gameHeading.componenet';
import { Platform } from './services/platform.service';
import { Genre } from './services/genre.service';

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  search: string; 
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
                  <GenreList selected_genre={game_query.genre} setSelectedGenre = {(genre)=> setGameQuery({...game_query, genre})} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                  <GameHeading game_query={game_query}/>
                  <Flex marginBottom={5}>
                      <Box marginRight={5}>
                        <PlatformSelector selected_platform={game_query.platform} setSelectedPlatform={(platform)=> setGameQuery({...game_query, platform})}/>
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

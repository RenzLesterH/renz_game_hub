import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/navBar.component';
import GameGrid from './components/gameGrid.component';
import GenreList from './components/genreList.component';
import { useState } from 'react';
import { Genre } from './hooks/useGenre.hook';
import PlatformSelector from './components/platformSelector.component';
import { Platform } from './hooks/useGame.hook';
import SortSelector from './components/sortSelector.component';

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
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
            lg: "250px 1fr"
          }}
      >
            <GridItem area="nav">
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                  <GenreList selected_genre={game_query.genre} setSelectedGenre = {(genre)=> setGameQuery({...game_query, genre})} />
                </GridItem>
            </Show>
            <GridItem area="main">
                <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                    <PlatformSelector selected_platform={game_query.platform} setSelectedPlatform={(platform)=> setGameQuery({...game_query, platform})}/>
                    <SortSelector/>
                </HStack>
                <GameGrid game_query={game_query}/>
            </GridItem>
      </Grid>
    </>
  )
}

export default App

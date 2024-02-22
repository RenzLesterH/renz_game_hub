import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/gameGrid.component';
import GameHeading from './components/gameHeading.componenet';
import GenreList from './components/genreList.component';
import NavBar from './components/navBar.component';
import PlatformSelector from './components/platformSelector.component';
import SortSelector from './components/sortSelector.component';

export interface GameQuery{
  genre_id?: number ;
  platform_id?: number;
  order?: string;
  search?: string;
  page_size?: number; 
}

function App() {

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
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                  <GenreList/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                  <GameHeading/>
                  <Flex marginBottom={5}>
                      <Box marginRight={5}>
                        <PlatformSelector/>
                      </Box>
                      <SortSelector/>
                  </Flex>
                </Box>
                <GameGrid/>
            </GridItem>
      </Grid>
    </>
  )
}

export default App

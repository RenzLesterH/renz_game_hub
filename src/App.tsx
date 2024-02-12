import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navBar.component';
import GameGrid from './components/gameGrid.component';
import GenreList from './components/genreList.component';
import { useState } from 'react';
import { Genre } from './hooks/useGenre.hook';

function App() {
  const [selected_genre, setSelectedGenre] = useState<Genre | null>(null);

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
                  <GenreList setSelectedGenre = {(genre)=> setSelectedGenre(genre)} />
                </GridItem>
            </Show>
            <GridItem area="main">
              <GameGrid selected_genre={selected_genre}/>
            </GridItem>
      </Grid>
    </>
  )
}

export default App

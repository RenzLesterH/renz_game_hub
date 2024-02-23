import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from '../components/gameGrid.component'
import GameHeading from '../components/gameHeading.componenet'
import GenreList from '../components/genreList.component'
import PlatformSelector from '../components/platformSelector.component'
import SortSelector from '../components/sortSelector.component'

const Homepage = () => {
  return (
        <Grid templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5} marginTop="30px">
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
    )
}

export default Homepage
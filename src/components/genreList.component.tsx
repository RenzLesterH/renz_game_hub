import { HStack, Image, List, ListItem, Skeleton, Button, Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre.hook'
import getCroppedImageUrl from '../services/imageUrl';
import useGameQueryStore from '../store/gameQuery.store';

const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const setGenreId = useGameQueryStore(state => state.setGenreId);
    const genre_id = useGameQueryStore(state => state.game_query.genre_id);
    

    if (error) return null;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
            <List>
                {(isLoading)
                    ? skeletons.map((genre) => (
                        <ListItem key={genre} paddingY="5px">
                            <HStack>
                                <Skeleton boxSize="32px"/>
                                <Skeleton width="80px" height="7px"/>
                            </HStack>
                        </ListItem>
                    ))
                    : data?.map((genre) => {
                        const font_weight = (genre.id === genre_id) ? "bold" : "normal";

                        return ( <ListItem key={genre.id} paddingY="5px">
                            <HStack>
                                <Image 
                                    boxSize="32px"
                                    borderRadius={8}
                                    objectFit="cover"
                                    src={getCroppedImageUrl(genre.image_background)}
                                />
                                <Button fontWeight={font_weight} whiteSpace="normal" textAlign="left" onClick={()=> setGenreId(genre.id) } variant="link" fontSize="lg">{genre.name}</Button>
                            </HStack>
                        </ListItem> );
                    })
                }

            </List>
        </>
    )
}

export default GenreList
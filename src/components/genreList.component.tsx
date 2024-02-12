import { HStack, Image, List, ListItem, Skeleton, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre.hook'
import getCroppedImageUrl from '../services/imageUrl';

interface Props{
    setSelectedGenre: (genre: Genre) => void
}

const GenreList = ({setSelectedGenre}: Props) => {
    const {data, is_loading, error} = useGenres();
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if (error) return null;

    return (
        <List>
            {(is_loading)
                ? skeletons.map((genre) => (
                    <ListItem key={genre} paddingY="5px">
                        <HStack>
                            <Skeleton boxSize="32px"/>
                            <Skeleton width="80px" height="7px"/>
                        </HStack>
                    </ListItem>
                  ))
                : data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image 
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button onClick={()=>setSelectedGenre(genre)} variant="link" fontSize="lg">{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))
            }

        </List>
    )
}

export default GenreList
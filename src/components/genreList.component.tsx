import { HStack, Image, List, ListItem, Skeleton, Button, Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre.hook'
import getCroppedImageUrl from '../services/imageUrl';
import { Genre } from '../services/genre.service';

interface Props{
    setSelectedGenre: (genre: Genre) => void;
    selected_genre_id?: number;
}

const GenreList = ({setSelectedGenre, selected_genre_id}: Props) => {
    const {data, isLoading, error} = useGenres();
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
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
                        const font_weight = (genre.id === selected_genre_id) ? "bold" : "normal";

                        return ( <ListItem key={genre.id} paddingY="5px">
                            <HStack>
                                <Image 
                                    boxSize="32px"
                                    borderRadius={8}
                                    objectFit="cover"
                                    src={getCroppedImageUrl(genre.image_background)}
                                />
                                <Button fontWeight={font_weight} whiteSpace="normal" textAlign="left" onClick={()=>setSelectedGenre(genre)} variant="link" fontSize="lg">{genre.name}</Button>
                            </HStack>
                        </ListItem> );
                    })
                }

            </List>
        </>
    )
}

export default GenreList
import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms.hook";
import useGenres from "../hooks/useGenre.hook";
import useFindItem from "../hooks/useFindItem.hook";

interface Props{
    game_query: GameQuery;
}

const GameHeading = ({game_query}: Props) => {
    const {data: platforms} = usePlatforms();
    const {data: genres} = useGenres();
    const selected_platform = useFindItem(platforms, game_query.platform_id);
    const selected_genre = useFindItem(genres, game_query.genre_id);

    const heading = `${selected_platform?.name || ""} ${selected_genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
    )
}

export default GameHeading
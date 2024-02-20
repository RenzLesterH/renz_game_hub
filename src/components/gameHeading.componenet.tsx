import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App";
import useFindPlatform from "../hooks/useFindPlatform.hook";
import useFindGenre from "../hooks/useFindGenre.hook";

interface Props{
    game_query: GameQuery;
}

const GameHeading = ({game_query}: Props) => {
    const selected_platform = useFindPlatform(game_query.platform_id);
    const selected_genre = useFindGenre(game_query.genre_id);

    const heading = `${selected_platform?.name || ""} ${selected_genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
    )
}

export default GameHeading
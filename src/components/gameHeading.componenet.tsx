import { Heading } from "@chakra-ui/react";
import useFindPlatform from "../hooks/useFindPlatform.hook";
import useFindGenre from "../hooks/useFindGenre.hook";
import useGameQueryStore from "../store/gameQuery.store";

const GameHeading = () => {
    const genre_id = useGameQueryStore(state => state.game_query.genre_id );
    const selected_genre = useFindGenre(genre_id);
    const platform_id = useGameQueryStore(state => state.game_query.platform_id );
    const selected_platform = useFindPlatform(platform_id);

    const heading = `${selected_platform?.name || ""} ${selected_genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
    )
}

export default GameHeading
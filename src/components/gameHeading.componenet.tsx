import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App";

interface Props{
    game_query: GameQuery;
}

const GameHeading = ({game_query}: Props) => {
    const heading = `${game_query.platform?.name || ""} ${game_query.genre?.name || ""} Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
    )
}

export default GameHeading
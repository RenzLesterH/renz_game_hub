import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail.hook";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetails = () => {
    const {slug} = useParams();
    const {data: game, error, isLoading} = useGameDetails(slug!);
    
    if(isLoading) return <Spinner/>

    if(error || !game) throw error;

    return (
        <>
          <Heading>{game?.name}</Heading>
          <Text>{game?.description_raw}</Text>
        </>
    )
}

export default GameDetails
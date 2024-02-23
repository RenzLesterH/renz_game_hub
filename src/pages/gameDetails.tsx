import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/expandableText.component";
import GameAttribute from "../components/gameAttribute.component";
import GameTrailer from "../components/gameTrailer.component";
import useGameDetails from "../hooks/useGameDetail.hook";

const GameDetails = () => {
    const {slug} = useParams();
    const {data: game, error, isLoading} = useGameDetails(slug!);
    
    if(isLoading) return <Spinner/>
    
    if(error || !game) throw error;

    return (
        <>
            <Heading>{game?.name}</Heading>
            <ExpandableText>{game?.description_raw}</ExpandableText>
            <GameAttribute game={game}/>
            <GameTrailer game_id={game?.id}/>
        </>
    )
}

export default GameDetails
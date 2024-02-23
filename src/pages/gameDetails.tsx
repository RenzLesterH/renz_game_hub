import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail.hook";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/expandableText.component";

const GameDetails = () => {
    const {slug} = useParams();
    const {data: game, error, isLoading} = useGameDetails(slug!);
    
    if(isLoading) return <Spinner/>

    if(error || !game) throw error;

    return (
        <>
          <Heading>{game?.name}</Heading>
          <ExpandableText>{game?.description_raw}</ExpandableText>
        </>
    )
}

export default GameDetails
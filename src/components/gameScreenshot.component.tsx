import { SimpleGrid, Image } from "@chakra-ui/react";
import useGameScreenshot from "../hooks/useGameScreenshot.hook";

interface Props{
    game_id: number;
}

const GameScreenshot = ({game_id}: Props) => {
    const {data, isLoading, error} = useGameScreenshot(game_id);

    if(isLoading) return null;

    if(error) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {data?.map(file => (
                <Image src={file?.image}/>
            ))}
        </SimpleGrid>
    )
}

export default GameScreenshot
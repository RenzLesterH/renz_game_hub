import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame.hook";
import PlatformIconList from "./platformIconList.component";
import CriticScore from "./criticScore.component";
import getCroppedImageUrl from "../services/imageUrl";

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent={"space-between"} marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(platform_item => platform_item.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard;
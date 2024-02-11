import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame.hook";
import PlatformIconList from "./platformIconList.component";

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {

    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(platform_item => platform_item.platform)}/>
            </CardBody>
        </Card>
    )
}

export default GameCard;
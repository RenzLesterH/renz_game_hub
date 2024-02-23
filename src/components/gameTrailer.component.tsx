import useGameTrailer from "../hooks/useGameTrailer.hook";

interface Props{
    game_id: number;
}

const GameTrailer = ({game_id}: Props) => {
    const {data, error, isLoading} = useGameTrailer(game_id);

    if(isLoading) return null;

    if(error) throw error;

    return (
        (data)
            ? <video 
                src={data[0]?.data[400]}
                poster={data[0]?.preview}
                controls
              />
            : null
    )
}

export default GameTrailer;
import useGenres from "./useGenre.hook";

const useFindGenre = (selected_id?: number) => {
    const {data} = useGenres();
    return data?.find((data_item) => data_item?.id === selected_id);
}

export default useFindGenre;
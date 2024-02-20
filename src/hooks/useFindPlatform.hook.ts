import usePlatforms from "./usePlatforms.hook";

const useFindPlatform = (selected_id?: number) => {
    const {data} = usePlatforms();
    return data?.find((data_item) => data_item?.id === selected_id);
}

export default useFindPlatform;
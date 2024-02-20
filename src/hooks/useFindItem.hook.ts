const useFindItem = (data: any[], selected_id?: number) => {
    return data?.find((platform_item) => platform_item?.id === selected_id);
}

export default useFindItem;
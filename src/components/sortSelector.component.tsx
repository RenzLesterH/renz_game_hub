import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store/gameQuery.store";

const SortSelector = () => {
    const[selected_order, setSelectedOrder] = useState("Relevence");
    const setOrder = useGameQueryStore(state => state.setOrder);

    const order_list = [
        {label: "Relevance", value: ""},
        {label: "Name", value: "name"},
        {label: "Released Date", value: "-released"},
        {label: "Added Date", value: "-added"},
        {label: "Created Date", value: "-created"},
        {label: "Updated Date", value: "-updated"},
        {label: "Average Rating", value: "-rating"},
        {label: "Popularity", value: "-metacritic"},
    ];

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {`Order by: ${selected_order} `}
            </MenuButton>
            <MenuList>
                {order_list.map((order_item) => (
                    <MenuItem 
                        onClick={() => {setOrder(order_item.value); setSelectedOrder(order_item.label)}} 
                        key={order_item.value} value={order_item.value}>{order_item.label}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
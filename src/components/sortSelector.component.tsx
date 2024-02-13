import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
    // const {data, error } = usePlatforms();

    // if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: Relevence
            </MenuButton>
            <MenuList>
                {/* {data.map((data_item) => (
                    <MenuItem onClick={() => setSelectedPlatform(data_item)} key={data_item.id}>{data_item.name}</MenuItem>
                ))} */}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
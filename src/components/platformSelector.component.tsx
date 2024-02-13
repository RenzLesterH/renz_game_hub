import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms.hook';
import { Platform } from '../hooks/useGame.hook';

interface Props {
    setSelectedPlatform: (platform: Platform) => void;
    selected_platform: Platform | null;
}

const PlatformSelector = ({setSelectedPlatform, selected_platform}: Props) => {
    const {data, error } = usePlatforms();

    if (error) return null;

    return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            {(selected_platform) ? selected_platform.name : "Platforms"}
        </MenuButton>
        <MenuList>
            {data.map((data_item) => (
                <MenuItem onClick={() => setSelectedPlatform(data_item)} key={data_item.id}>{data_item.name}</MenuItem>
            ))}
        </MenuList>
    </Menu>
    )
}

export default PlatformSelector
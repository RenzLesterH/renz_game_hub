import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms.hook';
import { Platform } from './../services/platform.service';
import useFindPlatform from '../hooks/useFindPlatform.hook';

interface Props {
    setSelectedPlatform: (platform: Platform) => void;
    selected_platform_id?: number;
}

const PlatformSelector = ({setSelectedPlatform, selected_platform_id}: Props) => {
    const {data, error } = usePlatforms();
    const selected_platform = useFindPlatform(selected_platform_id);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selected_platform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.map((data_item) => (
                    <MenuItem onClick={() => setSelectedPlatform(data_item)} key={data_item.id}>{data_item.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useFindPlatform from '../hooks/useFindPlatform.hook';
import usePlatforms from '../hooks/usePlatforms.hook';
import useGameQueryStore from '../store/gameQuery.store';

const PlatformSelector = () => {
    const {data, error } = usePlatforms();
    const setPlatformId = useGameQueryStore(state => state.setPlatformId);
    const platform_id = useGameQueryStore(state => state.game_query.platform_id);
    const selected_platform = useFindPlatform(platform_id);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selected_platform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.map((data_item) => (
                    <MenuItem onClick={() => setPlatformId(data_item.id)} key={data_item.id}>{data_item.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
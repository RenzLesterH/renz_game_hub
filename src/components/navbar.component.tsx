import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorModeSwitch from "./colorModeSwitch.component";
import SearchInput from "./searchInput.component";

interface Props {
    onSearch: (search: string) => void;
}

const NavBar = ({onSearch}: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="60px"/>
            <SearchInput onSearch={(search_value) => onSearch(search_value)}/>
            <ColorModeSwitch/>
        </HStack>
    )
};

export default NavBar;
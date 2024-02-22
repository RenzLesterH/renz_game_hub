import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorModeSwitch from "./colorModeSwitch.component";
import SearchInput from "./searchInput.component";

const NavBar = () => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="60px"/>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
};

export default NavBar;
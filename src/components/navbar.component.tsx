import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorModeSwitch from "./colorModeSwitch.component";
import SearchInput from "./searchInput.component";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <HStack padding="10px">
            <Link to="/">
                <Image src={logo} boxSize="60px"/>
            </Link>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    )
};

export default NavBar;
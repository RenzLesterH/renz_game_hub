import { HStack, Icon } from "@chakra-ui/react"
import { FaWindows,
         FaPlaystation,
         FaXbox,
         FaApple,
         FaLinux,
         FaAndroid, } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"         
import { IconType } from "react-icons"
import { Platform } from "../services/platform.service"

interface Props {
    platforms: Platform[];
}


const PlatformIconList = ({platforms}: Props) => {

    const icon_map: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }

  return (
    <HStack marginY={1}>
        {platforms.map((platform) => (
            <Icon key={platform.id} as={icon_map[platform.slug]} color="gray.500"/>
        ))}
    </HStack>
  )
}

export default PlatformIconList
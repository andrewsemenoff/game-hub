import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding='.8em'>
        <Image boxSize={'3em'} src={logo}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar
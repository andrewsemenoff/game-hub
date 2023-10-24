import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'

const NavBar = () => {
  return (
    <HStack>
        <Image boxSize={'3em'} src={logo}/>
        <p>hello</p>
    </HStack>
  )
}

export default NavBar
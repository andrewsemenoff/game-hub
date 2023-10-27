import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch: (searchingText: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding=".8em">
      <Image boxSize={"3em"} src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

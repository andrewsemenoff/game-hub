import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>sort by relevance</MenuButton>
      <MenuList>
        {[...Array(10).keys()].map((i) => (
          <MenuItem key={i}> {i} item</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import {
    HStack,
    ListItem,
    Skeleton
} from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack> 
        <Skeleton borderRadius={8} boxSize="32px" />
        <Skeleton h="1em" w="5em" />
      </HStack>
    </ListItem>
  );
};

export default GenreItemSkeleton;

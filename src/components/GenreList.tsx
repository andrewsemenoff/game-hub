import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const itemSkeletons = [...Array(20).keys()];
  if (error) return null;
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {isLoading && itemSkeletons.map((s) => <GenreItemSkeleton />)}
        {genres.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              />
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const itemSkeletons = [...Array(20).keys()];
  if (error) return null;
  return (
    <>
      {error && <Text textAlign='center' mb={5}>{error}</Text>}
      <Heading fontSize="2xl" textAlign='center' mb={5}>Genres</Heading>
      <List>
        {isLoading && itemSkeletons.map((s) => <GenreItemSkeleton key={s} />)}
        {genres.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(g.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                lineHeight="1"
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

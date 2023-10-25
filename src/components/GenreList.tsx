import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {genres.map((g) => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </>
  );
};

export default GenreList;

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons= [...Array(6).keys()]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1,md:2, lg: 3, xl: 5}} spacing={10} padding={'10px'}>
        {isLoading&&skeletons.map((s)=><GameCardSkeleton key={s}/>)}
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

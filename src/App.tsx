import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    selectedGenre: null,
    selectedPlatform: null,
  });
  const { selectedGenre, selectedPlatform } = gameQuery;
  const handleSelectedPlatform = (platform: Platform) => {
    setGameQuery((prev) => ({ ...prev, selectedPlatform: platform }));
  };
  const handleSelectGenre = (genre: Genre) => {
    setGameQuery((prev) => ({ ...prev, selectedGenre: genre }));
  };
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={handleSelectedPlatform}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

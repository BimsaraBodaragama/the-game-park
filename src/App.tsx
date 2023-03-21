import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import GameDetails from "./components/GameDetails";


export interface GameQuery { 
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  return (
    <Box marginTop='60px' maxHeight='calc(100vh - 60px)' overflowY='auto'
    background="url('src\assets\background-edit.png')"
  backgroundSize="cover"
  backgroundPosition="center"
  position="relative">
    {/* <Box
    position="absolute"
    top="0"
    left="0"
    width="100%"
    height="100%"
    backdropFilter="blur(1px)"
  ></Box> */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '300px 1fr'
        }}
        height='100%'
        marginBottom="1px"
      >
        <GridItem area="nav" overflowY="auto" height='100%'>
          <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} >
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre})} />
          </GridItem>
        </Show>
        <GridItem area="main" >
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform}) } />
              </Box>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        {/* <GameDetails></GameDetails> */}
      </Grid>
      <Box as="footer" textAlign="center" paddingY={2} borderTop="1px solid gray">
        The Game Park
        <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
              textAlign: `center`,
              display: `flex`,
              justifyContent: `center`,
              width: `100%`,
              maxWidth: `960px`,
              margin: `0 auto`,
            }}
          >
            © {new Date().getFullYear()} &middot; Bimsara Bodaragama
            {` `}
          </footer>
      </Box>
      
    </Box>
  );
}

export default App;

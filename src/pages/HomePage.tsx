import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
        xl: "260px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5} position="relative">
          <Box
            position="sticky"
            height="calc(100vh - 80px)"
            top="80px"
            overflowY="auto"
            className="genre-list"
            paddingBottom="40px"
          >
            <GenreList />
          </Box>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <Flex
          paddingLeft={2}
          marginBottom={5}
          maxHeight="100px"
          position="sticky"
          top="79px"
          zIndex="99"
          bg={bg}
          paddingBottom="15px"
        >
          <Box marginRight={{ base: 3, lg: 5 }}>
            <PlatformSelector />
          </Box>
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres();
  const genre = data?.results.find((g) => g.id === gameQuery.genreId);
  const platform = data?.results.find((p) => p.id === gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading paddingLeft={2} marginBottom={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;

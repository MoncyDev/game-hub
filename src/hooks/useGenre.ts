import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genre } = useGenres();
  return genre?.results.find((g) => g.id === id);
};

export default useGenre;

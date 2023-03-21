import {
Button,
Heading,
HStack,
Image,
List,
ListItem,
Spinner,
Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
onSelectGenre: (genre: Genre) => void;
selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
const { data, isLoading, error } = useGenres();

if (error) return null;

if (isLoading) return
<Spinner />;

const handleSelectAllGenres = () => {
  onSelectGenre(null);
};

return (
<>
  <Heading
      as='h1'
      marginY={5}
      marginTop={9} marginBottom={3}
      textAlign='center'
      fontSize='2xl'
      style={{
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 'bold',
        color: '#6ac045',
        textShadow: '1px 1px #ccc',
      }}
      alignItems='center'
    >
    Genres
  </Heading>
  <Button
        onClick={handleSelectAllGenres}
        fontWeight={!selectedGenre ? "bold" : "normal"}
        fontSize="md"
        variant="solid"
        _hover={{ bg: "#6ac045", color: "white" }}
        width="100%"
        color={!selectedGenre ? "#6ac045" : ""}
        bg={!selectedGenre ? "transparent" : "transparent"}
      >
        <Text>{`All Genres`}</Text>
      </Button>
  <List>
  {data.map((genre) => (
    <ListItem key={genre.id} paddingY="5px">
      <Button
        whiteSpace="normal"
        textAlign="left"
        fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
        onClick={() => onSelectGenre(genre)}
        fontSize="md"
        variant="solid"
        _hover={{ bg: "#6ac045", color: "white" }}
        width="100%"
        color={genre.id === selectedGenre?.id ? "#6ac045" : ""}
        bg={genre.id === selectedGenre?.id ? "transparent" : "transparent"}
      >
        <HStack justifyContent="flex-start" alignItems="flex-start">
          <Image
            boxSize="32px"
            borderRadius={8}
            objectFit="cover"
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            marginLeft={-2}
            marginRight={2}
          />
          <Text>{genre.name}</Text>
        </HStack>
      </Button>
    </ListItem>
  ))}
</List>



  <Heading
      as='h1'
      marginY={5}
      marginTop={9} marginBottom={3}
      textAlign='center'
      fontSize='2xl'
      style={{
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 'bold',
        color: '#6ac045',
        textShadow: '1px 1px #ccc',
      }}
      alignItems='center'
    >
    | The Game Park |
  </Heading>
  <Heading
      as='h3'
      marginY={5}
      marginTop={9} marginBottom={3}
      textAlign='center'
      fontSize='2xl'
      style={{
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 'bold',
        color: '#6ac045',
        textShadow: '1px 1px #ccc',
      }}
      alignItems='center'
    >
    © 2023
  </Heading>

    <Image
        boxSize="250px"
        objectFit="cover"
        src="src\assets\logo.webp"
        alt="example image"
        alignItems='center'
        marginTop={5}
      />

</>
);
};

export default GenreList;
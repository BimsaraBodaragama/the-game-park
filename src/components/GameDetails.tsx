import { Box, Button, Heading, Image, Text, HStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
    onClose: () => void;
    onGameSelect: (game: Game) => void;
}

const GameDetails = ({ game, onClose }: Props) => {

    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const handleGameDeselect = () => {
        setSelectedGame(null);
      };

  return (
      
    <Box
    position="absolute"
    top="0"
    left="0"
    height="100%"
    width="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="rgba(0, 0, 0, 0.5)"
    zIndex={9999}
  >
      
    <Box
      width="80%"
      height="80%"
      borderRadius="md"
      backgroundColor="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Box>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between' marginTop={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Text marginTop={3}>
          {game.name}
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Button colorScheme="green" onClick={() => console.log("Play Online")}>
          Play Online
        </Button>
        <Button colorScheme="blue" onClick={() => console.log("Download")}>
          Download
        </Button>
      </Box>
      <Box textAlign="right" width="100%">
        <Button colorScheme="red" onClick={handleGameDeselect}>
          Close
        </Button>
      </Box>
    </Box>
    </Box>
    // <Box
    //   height="100%"
    //   width="100%"
    //   borderRadius="md"
    //   overflow="hidden"
    //   position="relative"
    //   backgroundColor="white"
    //   padding={5}
    // >
        
    //   <Button
    //     position="absolute"
    //     top="5"
    //     right="5"
    //     colorScheme="gray"
    //     size="sm"
    //     onClick={onClose}
    //   >
          
    //     Close
    //   </Button>
    //   <Box marginBottom={5}>
    //     <Image src={getCroppedImageUrl(game.background_image)} />
    //     <Box marginTop={5}>
    //       <Heading fontSize="3xl">{game.name}</Heading>
    //       <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
    //       <CriticScore score={game.metacritic} />
    //       <Emoji rating={game.rating_top} />
    //     </Box>
    //   </Box>
    //   <Box>
    //     <Heading fontSize="xl">Summary</Heading>
    //     <Text marginTop={2}>{game.name}</Text>
    //   </Box>
    // </Box>
  );
};

export default GameDetails;

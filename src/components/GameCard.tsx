import { Box, Button, Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'
import App from '../../src/App';
import GameDetails from './GameDetails';

interface Props {
game: Game
}

const GameCard = ({ game }: Props) => {
const [isHovered, setIsHovered] = useState(false);
const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleMouseEnter = () => {
  setIsHovered(true);
  };

  const handleMouseLeave = () => {
  setIsHovered(false);
  };

  const handleGameSelect = (game: Game) => {
  setSelectedGame(game);
  };

  const handleGameDeselect = () => {
  setSelectedGame(null);
  };

  return (
  <Box height="100%" width="100%" borderRadius="md" overflow="hidden" position="relative"
    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} _hover={{
        '> img': {
          filter: 'blur(3px)',
        },
        '> div': {
          visibility: 'visible',
        },
      }}>
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)} />
            <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
    {selectedGame && <GameDetails game={game} onClose={function (): void { throw new Error('Function not implemented.')
      } } onGameSelect={function (game: Game): void { throw new Error('Function not implemented.') } }></GameDetails>}
    {isHovered && (
    <Box position="absolute" top="0" left="0" height="100%" width="100%" display="flex" justifyContent="center"
      alignItems="center" backgroundColor="rgba(0, 0, 0, 0.5)" zIndex={1}>
      {/* <Button colorScheme="green" onClick={()=> handleGameSelect(game)}>
        View Details
      </Button> */}
      <Box position="absolute" top="0" left="0" height="100%" width="100%" display="flex" justifyContent="center"
        alignItems="center" backgroundColor="rgba(0, 0, 0, 0.5)" zIndex={1}>
        <Button colorScheme="green" mr={3} onClick={()=> console.log("Play Online")}
          as="a" href="https://www.example.com/play-online" target="_blank" rel="noopener noreferrer">
          Play Online
        </Button>
        <Button colorScheme="blue" ml={3} onClick={()=> console.log("Download")}
          as="a" href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          Download
        </Button>

      </Box>



    </Box>

    )}
  </Box>
  )

  }
  export default GameCard
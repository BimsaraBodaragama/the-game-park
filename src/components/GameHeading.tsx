import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading
      as='h1'
      marginY={5}
      fontSize='5xl'
      textAlign='center'
      style={{
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 'bold',
        color: '#6ac045',
        textShadow: '1px 1px #ccc',
      }}
      alignItems='center'
    >
      {heading}
    </Heading>
  )
}

export default GameHeading

import stable from '../assets/stable.webp';
import beta from '../assets/beta.webp';
import alpha from '../assets/alpha.webp';
import fiveStars from '../assets/five-stars.webp';
import fourStars from '../assets/four-stars.webp';
import threeStars from '../assets/three-stars.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: threeStars, alt: 'threeStars', boxSize: '20px', width: '100px' },
    4: { src: fourStars, alt: 'fourStarts', boxSize: '20px', width: '100px' },
    5: { src: fiveStars, alt: 'fiveStars', boxSize: '20px', width: '100px' },
  }

  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji
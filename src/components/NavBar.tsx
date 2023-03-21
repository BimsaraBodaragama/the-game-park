import { HStack, Image, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === 'dark' ? 'black' : 'white';

  return (
    <HStack
      padding='10px'
      position='fixed'
      top='0'
      width='100%'
      backgroundColor={bgColor}
      boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      zIndex='9999'
    >
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar;

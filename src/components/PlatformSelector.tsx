import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props { 
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} _hover={{ backgroundColor: '#6ac045' }}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)} key="all" _hover={{ backgroundColor: '#6ac045' }}>
          All
        </MenuItem>
        {data.map(platform => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} _hover={{ backgroundColor: '#6ac045' }}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s ease-in-out', bg: "#6ac045", color: "white", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
      borderRadius={10}
      overflow="hidden"
      boxShadow="lg"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

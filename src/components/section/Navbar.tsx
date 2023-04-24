import Logo from '@/assets/logo.svg';
import {
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import ToggleColorMode from '@/components/button/ToggleColorMode';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box display="flex" justifyContent="center" shadow="sm" height="14">
      <Flex
        paddingX={{
          base: '3',
          sm: '5',
          lg: '8',
        }}
        justify="space-between"
        maxWidth={1280}
        bg={useColorModeValue('white', 'gray.800')}
        width="full"
        height="full"
        alignItems="center"
      >
        <Button size="sm" onClick={onOpen}>
          <GiHamburgerMenu />
        </Button>
        <ToggleColorMode />
      </Flex>
      <Sidebar onOpen isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;

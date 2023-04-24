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
import { BiSearch } from 'react-icons/bi';
import Sidebar from '../sidebar/Sidebar';
import { Link as LinkNav, useLocation } from 'react-router-dom';

const Navbar = () => {
  // for button to url on navbar
  const { pathname } = useLocation();

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
        <Text fontWeight="bold" fontSize="2xl">
          Pahe.In
        </Text>
        <Flex gap={2}>
          {pathname !== '/search' && (
            <Button size="sm" as={LinkNav} to="/search?focus=true">
              <BiSearch />
            </Button>
          )}
          <ToggleColorMode />
        </Flex>
      </Flex>
      <Sidebar onOpen isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;

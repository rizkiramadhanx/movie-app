import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button size="sm" onClick={() => toggleColorMode()}>
      {colorMode === 'dark' ? (
        <BsSunFill color="orange.200" />
      ) : (
        <BsFillMoonFill color="blue.700" />
      )}
    </Button>
  );
};

export default ToggleColorMode;

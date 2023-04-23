import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Heading,
} from '@chakra-ui/react';

import useSWR from 'swr';

import { BiBarChartSquare, BiCalendar, BiTrendingUp } from 'react-icons/bi';
import GroupSidebar, { listType } from './GroupSidebar';

interface Drawer {
  isOpen: boolean;
  onOpen: boolean;
  onClose: () => void;
}
const GROUP_DISCOVER: listType[] = [
  {
    icon: BiTrendingUp,
    id: 123,
    name: 'Popular',
  },
  {
    icon: BiCalendar,
    id: 123,
    name: 'Upcoming',
  },
  {
    icon: BiBarChartSquare,
    id: 123,
    name: 'Top Rated',
  },
];

const Sidebar = ({ isOpen, onClose }: Drawer) => {
  const { data, error, isLoading } = useSWR('/genre/movie/list');

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Heading noOfLines={1} as="h1">
            Movie App
          </Heading>
          <GroupSidebar
            slug="/discover/"
            title="Discover"
            onClose={onClose}
            list={GROUP_DISCOVER}
          />
          {data && (
            <GroupSidebar
              slug="/genre/"
              title="Genres"
              onClose={onClose}
              list={data.genres}
            />
          )}
        </DrawerBody>
        <DrawerFooter bg="blackAlpha.100">Rizki ramadhan</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;

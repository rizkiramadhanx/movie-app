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
import { transform } from 'framer-motion';
import { tranforsmDataGenresToFormatGroupSideBar } from '@/utils/logic';

interface Drawer {
  isOpen: boolean;
  onOpen: boolean;
  onClose: () => void;
}
const GROUP_DISCOVER: listType[] = [
  {
    icon: BiTrendingUp,
    slug: 'trending',
    name: 'Popular',
  },
  {
    icon: BiCalendar,
    slug: 'upcoming',
    name: 'Upcoming',
  },
  {
    icon: BiBarChartSquare,
    slug: 'top-rated',
    name: 'Top Rated',
  },
];

const Sidebar = ({ isOpen, onClose }: Drawer) => {
  const { data } = useSWR('/genre/movie/list');

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
            url="/discover/"
            title="Discover"
            onClose={onClose}
            list={GROUP_DISCOVER}
          />
          {data && (
            <GroupSidebar
              url="/genre/"
              title="Genres"
              onClose={onClose}
              list={tranforsmDataGenresToFormatGroupSideBar(data.genres)}
            />
          )}
        </DrawerBody>
        <DrawerFooter bg="blackAlpha.100">Rizki ramadhan</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;

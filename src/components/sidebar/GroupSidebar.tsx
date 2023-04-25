import {
  Divider,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkNav } from 'react-router-dom';

import { BiChevronRight } from 'react-icons/bi';
import { IconType } from 'react-icons';

export type listType = {
  slug: number | string;
  icon: IconType;
  name: string;
};

interface GroupListSidebar {
  title: string;
  list: listType[];
  onClose: () => void;
  url: string;
}
const GroupSidebar = ({ title, list, onClose, url }: GroupListSidebar) => {
  return (
    <>
      <Text fontWeight="bold" marginY="2">
        {title}
      </Text>
      <Divider />
      <List
        textAlign="left"
        color={useColorModeValue('orange', 'green.300')}
        marginTop="2"
      >
        {list.map((data, key) => (
          <ListItem
            key={key}
            fontWeight="medium"
            rounded="md"
            _hover={{
              bg: useColorModeValue('gray.800', 'white'),
            }}
            p="1"
            as={LinkNav}
            onClick={onClose}
            to={url + data.slug}
            style={{
              textDecoration: 'none',
            }}
            cursor="pointer"
            display="flex"
            alignItems="center"
          >
            <ListIcon as={data.icon || BiChevronRight} />
            <Text>{data.name}</Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GroupSidebar;

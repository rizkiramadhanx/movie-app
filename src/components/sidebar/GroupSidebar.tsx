import { Divider, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkNav } from 'react-router-dom';

import { BiChevronRight } from 'react-icons/bi';
import { IconType } from 'react-icons';

export type listType = {
  id: number;
  icon: IconType;
  name: string;
};

interface GroupListSidebar {
  title: string;
  list: listType[];
  onClose: () => void;
  slug: string;
}
const GroupSidebar = ({ title, list, onClose, slug }: GroupListSidebar) => {
  return (
    <>
      <Text fontWeight="bold" marginY="2">
        {title}
      </Text>
      <Divider />
      <List textAlign="left" color="green.500" marginTop="2">
        {list.map((data, key) => (
          <ListItem
            key={key}
            fontWeight="medium"
            rounded="md"
            _hover={{
              bg: 'white',
            }}
            p="1"
          >
            <ListIcon as={data.icon || BiChevronRight} />
            <Link
              //@ts-ignore
              as={LinkNav}
              onClick={onClose}
              to={slug + data.id}
              style={{
                textDecoration: 'none',
              }}
              cursor="pointer"
            >
              {data.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GroupSidebar;
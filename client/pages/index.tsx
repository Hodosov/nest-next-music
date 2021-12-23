import type { NextPage } from 'next'
import {
  Container, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, useColorModeValue, Flex, Menu, MenuGroup, MenuItem,
} from '@chakra-ui/react'
import { NavBar } from '../src/components/NavBar'

const menu = [
  {
    title: 'Главная'
  },
  {
    title: 'Список треков'
  },
  {
    title: 'Список альбомов'
  },
]

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <NavBar onOpen={onOpen} />
      <Container h='100%' maxW='container.md' pt={1}>
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <Flex>
                <Menu>
                  <MenuGroup width={'100%'}>
                    {menu.map(({ title }) => <MenuItem key={title}>{title}</MenuItem>)}
                  </MenuGroup>
                </Menu>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  )
}

export default Home

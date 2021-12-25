import type { NextPage } from 'next'
import {
  Container, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, useColorModeValue, Flex, Menu, MenuGroup, MenuItem,
} from '@chakra-ui/react'
import { NavBar } from '../src/components/NavBar'
import { useRouter } from 'next/router'
import { MainLayout } from '../src/components/Layout'


const Home: NextPage = () => {

  return (
    <MainLayout >
      <Container h='100%' maxW='container.md' pt={1}>

      </Container>
    </MainLayout>
  )
}

export default Home

import { FC, } from 'react';
import {
    Box,
    Flex,
    useColorModeValue,
    IconButton,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    MenuGroup,
    Menu,
    MenuItem,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';


const menu = [
    {
        title: 'Главная',
        href: '/'
    },
    {
        title: 'Список треков',
        href: "/tracks"

    },
    {
        title: 'Список альбомов',
        href: "/alboms"
    },
]

export const NavBar: FC = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} width={'100%'} position={'fixed'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    sx={{
                        boxShadow: 'none',
                    }} aria-label='' icon={<HamburgerIcon />} onClick={onOpen} />
            </Flex>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <Flex>
                            <Menu>
                                <MenuGroup width={'100%'}>
                                    {menu.map(({ title, href }) => <MenuItem onClick={() => router.push(href)} key={title}>{title}</MenuItem>)}
                                </MenuGroup>
                            </Menu>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

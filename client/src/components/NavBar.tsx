import { FC, } from 'react';
import {
    Box,
    Flex,
    useColorModeValue,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const NavBar: FC<NavProps> = ({ onOpen }) => {

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} width={'100%'} position={'fixed'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    sx={{
                        boxShadow: 'none',
                    }} aria-label='' icon={<HamburgerIcon />} onClick={onOpen} />
            </Flex>
        </Box>
    );
}

type NavProps = {
    onOpen: () => void
}
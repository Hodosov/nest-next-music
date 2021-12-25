import { FC } from "react"
import { ITrack } from "types/track"
import {
    Flex,
    Box,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';

export const TrackItem: FC<TracProps> = ({ track, active = false }) => {
    return (
        <Flex p={50} w="100%" alignItems="center" justifyContent="space-around" direction={'row'}>
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="14"
                borderWidth="1px"
                rounded="sm"
                shadow="lg"
                position="relative">
                <Image
                    src={track.pictre}
                    alt={`Picture of ${track.name}`}
                    roundedTop="lg"
                />
            </Box>
            <Box p="6">
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated>
                        {track.name}
                    </Box>
                </Flex>

            </Box>
        </Flex>
    );
}




type TracProps = {
    track: ITrack,
    active?: boolean

}
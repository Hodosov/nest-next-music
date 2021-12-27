import {
  IconButton,
  useColorModeValue,
  Box,
  Flex,
  Text
} from '@chakra-ui/react';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FaPause, FaPlay, FaVolumeUp } from 'react-icons/fa';
import { TrackProgress } from './TrackProgress';

export const Player = () => {
  const { pause } = useTypedSelector((state) => state.player);
  const { pauseTrack, playTrack } = useActions();

  const play = () => {
    pause ? playTrack() : pauseTrack();
  };

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      width="100%"
      height="14"
      position="fixed"
      bottom={0}
      alignItems="center"
      zIndex={100}
    >
      <IconButton
        borderRadius="50%"
        aria-label=""
        icon={!pause ? <FaPause /> : <FaPlay />}
        onClick={play}
      />
      <Box ml="8">
        <Text>Artist</Text>
        <Text>Track Name</Text>
      </Box>
      <Box ml="8" width={300}>
        <TrackProgress left={30} right={100} onChange={() => {}} />
      </Box>
      <Flex ml="8" width="50%" justifyContent="end">
        <IconButton aria-label="" borderRadius="50%" icon={<FaVolumeUp />} />
        <Box ml="8" width={300} alignSelf="center">
          <TrackProgress left={30} right={100} onChange={() => {}} />
        </Box>
      </Flex>
    </Flex>
  );
};

import {
  Box,
  Flex,
  Text,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react';
import { FC } from 'react';

export const TrackProgress: FC<TrackProps> = ({ left, right, onChange }) => {
  return (
    <Flex>
      <Slider
        aria-label="slider-ex-2"
        colorScheme="pink"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Box ml="8">
        <Text whiteSpace="nowrap">
          {left} / {right}
        </Text>
      </Box>
    </Flex>
  );
};

interface TrackProps {
  left: number;
  right: number;
  onChange: (e: number) => void;
}

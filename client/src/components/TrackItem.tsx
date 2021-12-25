import { FC } from "react";
import Image from "next/image";
import { ITrack } from "types/track";
import { Box, Text, IconButton, Grid, Flex } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";

export const TrackItem: FC<TracProps> = ({ track, active = false }) => {
    const router = useRouter();

    return (
        <Grid
            onClick={() => router.push(`/tracks/${track._id}`)}
            p={2}
            templateColumns="1fr 1fr 2fr 8fr"
            mt={6}
            gap={2}
            borderRadius={26}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            sx={{
                ":hover": {
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                },
            }}
        >
            <Box w="100%" h="10">
                <IconButton
                    borderRadius="50%"
                    aria-label=""
                    icon={active ? <FaPause /> : <FaPlay />}
                    onClick={(e) => e.stopPropagation()}
                />
            </Box>
            <Box maxW={50} h="10">
                <Image alt="" width={40} height={40} src={track.pictre} />
            </Box>
            <Box w="100%" h="10">
                <Text>{track.name}</Text>
                <Text>{track.artist}</Text>
            </Box>
            <Flex w="100%" h="10" justifyContent="end">
                <Box sx={{ alignSelf: "center" }} mr="8">
                    02:32 / 3:12
                </Box>
                <Box>
                    <IconButton
                        aria-label=""
                        icon={<FaTrash />}
                        borderRadius="50%"
                        onClick={(e) => e.stopPropagation()}
                    />
                </Box>
            </Flex>
        </Grid>
    );
};

type TracProps = {
    track: ITrack;
    active?: boolean;
};

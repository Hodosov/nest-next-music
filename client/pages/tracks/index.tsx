import { MainLayout } from '@/components/Layout';
import { TrackList } from '@/components/TrackList';
import { Grid, Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ITrack } from 'types/track';

const tracks: ITrack[] = [
  {
    _id: '1',
    artist: 'Yan',
    audio: 'sd',
    comment: [],
    listens: 0,
    name: 'sdsdsd',
    pictre:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    text: '',
  },
  {
    _id: '1',
    artist: 'Yan',
    audio: 'sd',
    comment: [],
    listens: 0,
    name: 'sdsdsd',
    pictre:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    text: '',
  },
];

export default function TracksPage() {
  const router = useRouter();
  return (
    <MainLayout>
      <Grid templateColumns="3fr 1fr" gap={2} mt={2}>
        <Box w="100%" h="10" justifySelf={'center'}>
          <Text fontWeight="extrabold" fontSize={30}>
            Список треков
          </Text>
        </Box>
        <Box w="100%" h="10">
          <Button isFullWidth onClick={() => router.push('/tracks/create')}>
            Загрузить
          </Button>
        </Box>
      </Grid>
      <TrackList tracks={tracks} />
    </MainLayout>
  );
}

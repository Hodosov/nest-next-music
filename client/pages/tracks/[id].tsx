import { MainLayout } from '@/components/Layout';
import { IconButton, Input, Stack, Textarea } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

export default function TrackPage() {
  const router = useRouter();

  return (
    <MainLayout>
      <Stack>
        <IconButton
          maxWidth="50"
          height="50"
          borderRadius="50%"
          aria-label=""
          onClick={() => router.back()}
          icon={<FaArrowLeft />}
        />
        <Input placeholder="Basic usage" />

        <Textarea placeholder="Here is a sample placeholder" />
      </Stack>
    </MainLayout>
  );
}

import { MainLayout } from "@/components/Layout";
import { Grid, Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function TracksPage() {
    const router = useRouter()
    return (
        <MainLayout>
            <Grid templateColumns='3fr 1fr' gap={2} mt={2}>
                <Box w='100%' h='10' justifySelf={'center'} >
                    <Text fontWeight="extrabold" fontSize={30}>
                        Список треков
                    </Text>
                </Box>
                <Box w='100%' h='10'>
                    <Button isFullWidth onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                </Box>
            </Grid>
        </MainLayout >)
}
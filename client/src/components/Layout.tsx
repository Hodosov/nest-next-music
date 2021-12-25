import { FC } from "react"
import { NavBar } from "@/components/NavBar"
import { Container } from "@chakra-ui/react"

export const MainLayout: FC = ({ children }) => {

    return (
        <>
            <NavBar />
            <Container h='100vh' mt={16} maxW='container.md' pt={1}>
                {children}
            </Container>
        </>
    )
}

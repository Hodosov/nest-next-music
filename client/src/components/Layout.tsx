import { useDisclosure } from "@chakra-ui/react"
import { Children, FC } from "react"
import { NavBar } from "./NavBar"

export const MainLayout: FC = ({ children }) => {

    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

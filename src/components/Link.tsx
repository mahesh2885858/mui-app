import { Typography, Link as MuiLink, Button } from "@mui/material"
import { LinkTypeMap } from "@mui/material"
import NextLink from "next/link"
import { ReactNode } from "react"
interface propType {
    [key: string]: string
}
interface linkType {
    children: ReactNode
    to: string
}
const Link = (props: linkType) => {
    const { children, to } = props
    return (
        <MuiLink sx={{ color: "white", textDecoration: "none" }} component={NextLink} href={to}>
            <Button variant="contained">

                {children}
            </Button>
        </MuiLink>
    )
}
export default Link
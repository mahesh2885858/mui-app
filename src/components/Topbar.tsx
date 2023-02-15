import { Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import Link from "./Link"
const Topbar = ({ children, ...props }: { children: ReactNode, props?: any }) => {
    return (
        <Box>
            <Box>
                <Link to='/' >
                    <Typography>Home</Typography>
                </Link>
                <Link to='/register' >
                    <Typography>Register</Typography>
                </Link>
                <Link to='/login' >
                    <Typography>Login</Typography>
                </Link>
            </Box>

            {children}
        </Box>
    )
}

export default Topbar
import Link from '@/components/Link'
import Topbar from '@/components/Topbar'
import { Context } from '@/theme'
import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'

const about = () => {
    const { toggleTheme, mode } = useContext(Context)
    return (
        <>
            <Topbar>
                <Box>
                    <Typography>
                        This is default typography elemenet
                    </Typography>
                    <Typography variant="body2" >
                        This is default typography elemenet
                    </Typography>
                    <Typography variant="h1">
                        This is h1 typography elemenet
                    </Typography>
                    <Typography variant="h2">
                        This is default typography elemenet
                    </Typography>
                    <Button variant="contained" sx={{ bgColor: mode === "dark" ? "white" : "black" }} onClick={toggleTheme} >{mode}</Button>
                </Box>
            </Topbar>
        </>
    )
}

export default about
import React, { useState } from 'react'
import { Box, Paper, Typography, FormGroup, TextField, Button } from "@mui/material"
const Login = () => {
    const [inputs, setInputs] = useState({

        email: "",
        password: ""
    })
    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const OnSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(inputs)
    }
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <form onSubmit={OnSubmit}>
                <Paper elevation={6}
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: "25px",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                    <Typography variant="h5" color="text">Login</Typography>
                    <FormGroup sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>


                        <TextField
                            size='small'
                            label='email'
                            required
                            type={"email"}
                            // toggle this helper text to show errors conditionally
                            helperText=""
                            value={inputs.email}
                            onChange={OnChange}
                            name="email"
                        />
                        <TextField
                            size='small'
                            label='password'
                            required
                            type={"password"}
                            // toggle this helper text to show errors conditionally
                            helperText=""
                            value={inputs.password}
                            onChange={OnChange}
                            name="password"
                        />
                    </FormGroup>
                    <Button variant="contained" type='submit'>
                        Login
                    </Button>
                    <Box>
                        {/* <Typography sx={{ color: "red" }} >{error}</Typography> */}
                    </Box>
                    {/* <Box>{loading && "Loading..."}</Box> */}

                </Paper>
            </form>

        </Box>
    )
}

export default Login
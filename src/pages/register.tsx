import { Box, Typography, Button, FormGroup, Paper, TextField, FormLabel, } from '@mui/material'
import React, { useState } from 'react'
import { gql, useQuery, useMutation } from "@apollo/client"
import { Router, useRouter } from 'next/router'

const Register = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const router = useRouter()
    // gql mutation string
    const USER_DETAILS = gql`
mutation CreateUser($name: String, $email: String, $password: String) {
  createUser(name: $name, email: $email, password: $password) {
    email
    name
  }
}

`
    const [addUser, { loading }] = useMutation<any>(USER_DETAILS, {
        variables: { ...inputs }, onCompleted: (data) => {
            console.log(data)
        }
    })

    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("")
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const OnSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await addUser()
            router.push("/login")
        } catch (err: any) {
            console.log(err.message)
            setError(err.message)
        }

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
            <form>
                <Paper elevation={6}
                    sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: "25px",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                    <Typography variant="h5" color="text">Registration</Typography>
                    <FormGroup sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                        <TextField
                            size='small'
                            label='name'
                            required
                            type={"text"}
                            // toggle this helper text to show errors conditionally
                            helperText=""
                            value={inputs.name}
                            onChange={OnChange}
                            name="name"
                        />
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
                    <Button variant="contained" onClick={OnSubmit}>
                        Register
                    </Button>
                    <Box>
                        <Typography sx={{ color: "red" }} >{error}</Typography>
                    </Box>
                    <Box>{loading && "Loading..."}</Box>

                </Paper>
            </form>

        </Box>
    )
}

export default Register
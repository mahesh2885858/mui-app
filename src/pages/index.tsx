import { Box, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import { styled, MUIStyledCommonProps } from "@mui/system"
import { useContext } from "react"
import { Context } from "@/theme"
import { gql, useQuery } from "@apollo/client"

import Topbar from "@/components/Topbar"

const query = gql`
 query {
    greet{
      name,
      age
    }
  }
`
export default function Home() {
  const theme = useTheme()
  const con = useContext(Context)
  const { loading, error, data } = useQuery(query);
  const getData = () => {
    console.log({ res: data.greet.name })
  }
  return (
    <>

      <Box>this is a box</Box>
      <Button variant="contained" onClick={getData}>Get the data</Button>

    </>
  )
}



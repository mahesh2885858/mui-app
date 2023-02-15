import { createTheme, ThemeOptions } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';

import { createContext, ReactNode, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
export const theme = (mode: "light" | "dark"): ThemeOptions => {
    return (mode === "light" ? {
        typography: {

            h1: {
                color: "green"
            }
        },

    } : {
        typography: {

            h1: {
                color: "white"
            }
        },
        palette: {
            mode: mode,
            primary: {
                main: purple[500]
            }
        }
    })
}
interface contextType {
    mode: "light" | "dark",
    toggleTheme: () => void

}
export const Context = createContext<contextType>({
    mode: "light",
    toggleTheme: () => { }
})
const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const toggleTheme = () => {
        console.log("it sis running")
        setMode((prev) => {
            if (prev == "light") return "dark"
            return "light"
        })
    }
    const customTheme = useMemo(() => createTheme(theme(mode)), [mode])
    return (
        <ThemeProvider theme={customTheme}>
            <Context.Provider value={{ mode, toggleTheme }}>{children}</Context.Provider>
        </ThemeProvider>
    )
}
export default ContextProvider
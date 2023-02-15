import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import ContextProvider from '@/theme'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Topbar from '@/components/Topbar'
const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <ApolloProvider client={client}>
      <ContextProvider>
        <CssBaseline />
        <Topbar>

          <Component {...pageProps} />
        </Topbar>
      </ContextProvider>
    </ApolloProvider>

  </>)
}

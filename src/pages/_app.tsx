import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import '../styles/globals.css'
import { LoggedUserProvider } from '../context/LoggedUserContext'


function MyApp({ Component, pageProps }: AppProps) {
  return <LoggedUserProvider><Component {...pageProps} /></LoggedUserProvider>
}

export default MyApp

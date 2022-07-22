import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCjav6-PjNAPYz34U6HjtsWNOD46_hbkfY",
  authDomain: "eurica-21f34.firebaseapp.com",
  projectId: "eurica-21f34",
  storageBucket: "eurica-21f34.appspot.com",
  messagingSenderId: "751189547047",
  appId: "1:751189547047:web:1a266b7371df86c7159602"
};

const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

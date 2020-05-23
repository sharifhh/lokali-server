import Nav from '../components/Nav/Nav'
import Head from '../components/head'
import '../styles/main.css'
import AuthContextProvider from '../context/AuthContext'
function MyApp({ Component, pageProps }) {


    return (
        <div className="app">
            <AuthContextProvider>
                <Nav/>
                <Head title="Lokali"/>
                <Component {...pageProps} />
            </AuthContextProvider>
       
        </div>
    )
  }

  
  export default MyApp
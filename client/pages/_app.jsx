import Nav from '../components/Nav/Nav'
import Head from '../components/head'
import '../styles/main.css'
import AuthContextProvider from '../context/AuthContext'
import PostContextPovider from '../context/PostContext'
function MyApp({ Component, pageProps }) {


    return (
        <div className="app">
            <AuthContextProvider>
                <PostContextPovider>
                    <Nav/>
                    <Head title="Lokali"/>
                    <Component {...pageProps} />
                </PostContextPovider>
            </AuthContextProvider>
       
        </div>
    )
  }

  
  export default MyApp
import Nav from '../components/Nav/Nav'
// import '../styles.css'
import '../styles/main.css'
import AuthContextProvider from '../context/AuthContext'
function MyApp({ Component, pageProps }) {
    
    return (
        <div className="app">
            <AuthContextProvider>
                <Nav/>
                <Component {...pageProps} />
            </AuthContextProvider>
       
        </div>
    )
  }

  
  export default MyApp
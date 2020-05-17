import Nav from '../components/Nav/Nav'
import '../styles.css'
function MyApp({ Component, pageProps }) {
    
    return (
        <div className="app">
            <Nav/>
            <Component {...pageProps} />
        </div>
    )
  }

  
  export default MyApp
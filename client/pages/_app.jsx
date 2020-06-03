import Nav from '../components/Nav/Nav'
import Head from '../components/head'
import '../styles/main.css'
import AuthContextProvider from '../context/AuthContext'
import PostContextProvider from '../context/PostContext'
function MyApp ({ Component, pageProps }) {
  return (
    <div className='app'>
      <AuthContextProvider>
        <PostContextProvider>
          <Nav />
          <Head title='Lokali' />
          <Component {...pageProps} />
        </PostContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default MyApp

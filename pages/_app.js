import NavBar from '../src/components/NavBar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />

    </div>
  ) 
  
}

export default MyApp

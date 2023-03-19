import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
function Layout({children,isLoggedIn}:any) {
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/>
      {children}
      <Footer/>
    </BrowserRouter>
  )
}

export default Layout
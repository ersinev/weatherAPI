import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
function Layout({children,logout}:any) {
  return (
    <BrowserRouter>
      <Header logout={logout}/>
      {children}
      <Footer/>
    </BrowserRouter>
  )
}

export default Layout
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
function Layout({children}:any) {
  return (
    <BrowserRouter>
      <Header/>
      {children}
      <Footer/>
    </BrowserRouter>
  )
}

export default Layout
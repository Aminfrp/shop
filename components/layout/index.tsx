import { ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'

interface IProps {
  children: ReactNode
}

const Layout = (props: IProps) => {
  return (
    <>
      <Header></Header>
      <main className='box-container grow'>
        {props.children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout
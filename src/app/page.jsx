
import Image from 'next/image'
import Header from '../components/header/Header'
import Menu from '@/components/Menu/Menu'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div className="container mx-auto ">

      <Header/>
      <Menu/>
      <Footer/>

    </div>
  )
}

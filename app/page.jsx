import Image from 'next/image'
import HomePage from './components/HomePage'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="">
      <Header />
        <HomePage />
    </main>
  )
}

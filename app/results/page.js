

import Image from 'next/image'
import { DefaultTable } from '../components/table'



export default async function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <DefaultTable/>
    </main>
  

  )
}

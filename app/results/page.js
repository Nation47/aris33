

import Image from 'next/image'
import { DefaultTable } from '../components/table',
import {table} from '../components'



export default async function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <DefaultTable/>
      <table />
    </main>
  

  )
}

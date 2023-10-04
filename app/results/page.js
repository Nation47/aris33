"use client"

import Image from 'next/image'
import { DefaultTable } from '../components/table'
import { useEffect, useState } from 'react';


export default function Home() {
  const [delayPassed, setDelayPassed] = useState(false);
  useEffect(() => {
    // Fetch user data here
   

    // Set a delay of 5 seconds
    const delayTimer = setTimeout(() => {
      setDelayPassed(true);
    }, 2000);

    return () => clearTimeout(delayTimer);
  }, []);
  return (
    <>
    { !delayPassed ? (
      <p className='invisible'>Fetching Posts...</p>
    ) : (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <DefaultTable/>
    </main>
    )}
    </>
  )
}

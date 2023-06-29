import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen p-24 ${inter.className}`}
    >

      <div className="flex justify-between">
        <h1 className=" text-3xl">CodeWhiz</h1>
        <Link href="/editor" className='border-2 border-black rounded-md p-5'>Try Now</Link>
      </div>


    </main>
  )
}

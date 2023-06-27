// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// // import styles from '@/styles/Home.module.css'
import Link from 'next/link';
export default function Home() {
  return (
    <>
    <div>
     <h1>hello world</h1> 
     <ul>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/clients">Clients</Link>
        {/* <Link href="/portfolio"></Link> */}
      </li>
     </ul>
    </div>
    </>
  )
}

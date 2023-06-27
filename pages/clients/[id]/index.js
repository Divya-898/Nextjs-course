import { useRouter } from 'next/router';
import React from 'react'

function ClientProjectpage() {
    const router = useRouter();
   console.log(router.query)
   const loadProjecthandler = ()=>{
    router.push('/clients/max/projecta')
   }
  return (
    <div>
      <h1> A project of given client</h1>
      <button onClick={loadProjecthandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectpage

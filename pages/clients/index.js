import Link from 'next/link'
import React from 'react'

function ClientPage() {
  const clients = [
    {id:"max", name:"Maxmilian"},
    {id:"manu", name:"Manuel"}
  ]
  return (
    <div>
      <h1>client page</h1>
      <ul>
       {clients.map((client) =>( 
        <li key={client.id}>
         <Link href={{ 
          pathname : "/clients/[id]",
         query:{ id: client.id}
         }}>{client.name}</Link>
       </li>
       ))}
       {/* 
       another way to navigate
       <li key={client.id}>
         <Link href={`/clients/${client.id}`}>{client.name}</Link>
       </li> */}
       
      
     
      
        {/* <li>
          <Link href="/clients/max">Maxmillian</Link>
        </li>
        <li>
          <Link href="/clients/menu">Manuel</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default ClientPage

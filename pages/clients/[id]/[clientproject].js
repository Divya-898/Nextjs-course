import { useRouter } from 'next/router'
import React from 'react'

function SelectedClientProjectPage() {
   const router = useRouter();
   console.log(router.query)
  return (
    <div>
      <h1>The Project page for a specific selected client </h1>
    </div>
  )
}

export default SelectedClientProjectPage

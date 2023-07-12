import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);
    const [sales1, setSales1] = useState();
    const [isLoading, setIsLoading]= useState(false)
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error } = useSWR('https://nextjs-course-b7916-default-rtdb.firebaseio.com/sales.json', fetcher) 
    const handleEvent = () => {
    setIsLoading(true)
     if(data){
        const transformedSales = [];
         for(const key in data){
            transformedSales.push({id: key,
            username: data[key].username,
            valume: data[key].valume
            })
         }
         setSales1(transformedSales);
        setIsLoading(false)
     }
   }
   
  //  useEffect(()=>{
  //       setIsLoading(true)
  //       if(data){
  //    fetch('https://nextjs-course-b7916-default-rtdb.firebaseio.com/sales.json')
  //    .then(response => response.json())
  //    .then(data =>{
  //       const transformedSales = [];
  //        for(const key in data){
  //           transformedSales.push({id: key,
  //           username: data[key].username,
  //           valume: data[key].valume
  //           })
  //        }
  //       setSales(transformedSales);
  //       setIsLoading(false)
  //    })
  //   }
     
  //   },[data])
    
if(error){
        return <p>Failed to reload</p>
      }
    if(!data && !sales){
        return <p>Loading....</p>
    }
    
  return (
    <>
    <button onClick={handleEvent}>fetch</button>
    <ul>
      {sales.map(sale => <li key={sale.id}>
        {sale.username} - ${sale.valume}
      </li>)}
    </ul>
    <ul>
      {sales1 && sales1.map(sale1 => <li key={sale1.id}>
        {sale1.username} 
      </li>)}
    </ul>
    </>
  )
}
// server side fetching
export async function getStaticProps() {
    const response = await fetch(
      'https://nextjs-course-b7916-default-rtdb.firebaseio.com/sales.json'
    );
    const data = await response.json();
    const transformedSales = [];
    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        valume: data[key].valume,
      });
    }
  
    return { props: { sales: transformedSales } };
  }
  export async function getServerSideProps() {
    const response = await fetch(
      'https://nextjs-course-b7916-default-rtdb.firebaseio.com/sales.json'
    );
    const data = await response.json();
    const transformedSales = [];
    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        valume: data[key].valume,
      });
    }
  
    return { props: { sales: transformedSales } };
  }

export default LastSalesPage

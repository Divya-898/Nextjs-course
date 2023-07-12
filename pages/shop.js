import { useRouter } from 'next/router';
const Shop = () => {
    const router = useRouter();
    const { param1, param2 } = router.query;
  
    // Rest of your component logic
  
    return (
      <div>
        <h1>Shop</h1>
        <p>Param1: {param1}</p>
        <p>Param2: {param2}</p>
      </div>
    );
  };
  
  export default Shop;
  
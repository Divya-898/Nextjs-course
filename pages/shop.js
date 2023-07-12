import { useRouter } from 'next/router';

const Shop = () => {
  const router = useRouter();
  const { merchantID, pid } = router.query;

  return (
    <div>
      <h1>Shop</h1>
      <p>Merchant ID: {merchantID}</p>
      <p>Product ID: {pid}</p>
    </div>
  
  );
};

export default Shop;

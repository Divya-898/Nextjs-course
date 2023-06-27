import { useRouter } from "next/router";
function portfolioPageProduct(){
   const router = useRouter();
   console.log(router.pathname);
   console.log(router.query)
    return(
        <div>
        <h1>product page</h1>
        </div>
    )
}
export default portfolioPageProduct;
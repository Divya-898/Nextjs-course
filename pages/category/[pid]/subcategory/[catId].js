// import path from "path";
// import fs from "fs/promises";

import { useRouter } from "next/router";
import { Fragment } from "react";

function DetailPage() {
  const router = useRouter();
  // categorySlug matches the filename [categorySlug].tsx
  const { catId } = router.query;
  // For the path /category/react. categorySlug => react
  console.log(catId);
  // const { loadedProduct } = props;

  // if (!loadedProduct) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Fragment>
      <h1>title1 {catId}</h1>
      {/* <p>{loadedProduct.description}</p> */}
    </Fragment>
  );
}

// async function getData() {
//   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return data;
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   const productId = params.catId;
//   console.log(productId)
//   const data = await getData();
//   const product = data.products.find((product) => product.id === productId);

//   if (!product) {
//     return { notFound: true };
//   }
  
//   return {
//     props: {
//       loadedProduct: product,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const data = await getData();
//   const ids = data.products.map((product) => product.id);
//   const pathsWithParams = ids.map((id) => ({ params: {catId: id } }));
//   console.log(pathsWithParams)
//   return {
//     paths: pathsWithParams,
//     fallback: true,
//   };
// }

export default DetailPage;
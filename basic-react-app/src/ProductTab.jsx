
import Product from "./Product";


function ProductTab() {
    let options=["hi-tech","durable","fast"];
  return (
    <>
    <ProductTab  title="phone" price={30000} />
    <ProductTab  title="laptop" price={40000} />
    <ProductTab  title="phone" price={1} />
    </> 
  );
}

export default ProductTab;

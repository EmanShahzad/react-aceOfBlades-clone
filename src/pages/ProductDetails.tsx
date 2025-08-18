import TitleSection from "../components/TitleSection";
import RelatedProducts from "../components/productDetails/RelatedProducts";
import ProductDetailsComponent from "../components/productDetails/productDetailsComponent";

function ProductDetails() {
  return (
    <>
      <TitleSection title="Product name and code here" />
      <ProductDetailsComponent />
      <RelatedProducts />
    </>
  );
}
export default ProductDetails;

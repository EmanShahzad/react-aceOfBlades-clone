import TitleSection from "../components/TitleComponent/TitleSection";
import RelatedProducts from "../components/productDetailsPage/RelatedProducts";
import ProductDetailsComponent from "../components/productDetailsPage/productDetailsComponent";

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

import TitleSection from "../components/TitleComponent/TitleSection";
import RelatedProducts from "../components/productDetailsPage/RelatedProducts";
import ProductDetailsComponent from "../components/productDetailsPage/productDetailsComponent";
import { useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const products = useAppSelector((state) => state.products);
  const categories = useAppSelector((state) => {
    return state.categories;
  });

  const { id } = useParams<{ id: string }>();
  const item = products.find((x) => x.id === id);
  return (
    <>
      <TitleSection title={item?.name} />
      <ProductDetailsComponent
        products={products}
        categories={categories}
        item={item}
      />
      {products.find((p) => {
        return p.categoryId === item?.categoryId && p !== item;
      }) ? (
        <RelatedProducts
          products={products}
          categories={categories}
          item={item}
        />
      ) : null}
    </>
  );
}
export default ProductDetails;

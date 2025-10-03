import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/CartSlice";
import { ProductState } from "../../types/products";
import { CategoryState } from "../../types/category";

interface RelatedProductsProps {
  products: ProductState[];
  categories: CategoryState[];
  item?: ProductState;
}

function RelatedProducts({ products, categories, item }: RelatedProductsProps) {
  function categoryName(item: ProductState) {
    return categories.find((c) => c.id === item.categoryId)?.name;
  }

  const dispatch = useAppDispatch();
  const addItem = (itemId: string, quantity: number) => {
    dispatch(addToCart({ itemId, quantity }));
  };
  return (
    <div className="d-flex justify-content-center flex-column pb-5">
      <div className="container">
        <div
          className="fs-1 pt-5 ps-5 pb-2 fw-semibold"
          style={{ fontFamily: "Barlow Semi Condensed, sans-serif" }}
        >
          Related products
        </div>
        <div className="d-flex justify-content-center align-items-center ps-5 pb-5">
          <div
            className="d-flex justify-content-start align-items-start flex-wrap gap-4 px-5 py-2"
            style={{ fontFamily: "Roboto, sans-serif", width: "100%" }}
          >
            {products.map((product) =>
              product !== item && product.categoryId === item?.categoryId ? (
                <div
                  key={item.id}
                  className="d-flex flex-column w-25 h-auto mr-1"
                  style={{
                    maxWidth: "24%",
                    boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, .1)",
                  }}
                >
                  <NavLink to={`/product/${product.id}`}>
                    <img
                      className="w-100 bg-white h-100"
                      src={product.images[0]}
                      alt=""
                    />
                  </NavLink>
                  <div
                    className="d-flex flex-column justify-content-center text-center gap-1"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <span style={{ color: "gray" }}>{categoryName(item)}</span>
                    <span className="fw-semibold">{product.name}</span>

                    <span
                      className="fw-semibold"
                      style={{ color: "#4a4949ff" }}
                    >
                      {product.price}
                    </span>

                    <span className="d-flex justify-content-center my-3">
                      {product.stock === 0 ? (
                        <button className="btn btn-dark rounded-0 px-4">
                          Out of Stock
                        </button>
                      ) : (
                        <button
                          className="btn btn-dark rounded-0 px-4"
                          onClick={() => {
                            if (product.id) addItem(product.id, 1);
                          }}
                        >
                          Add to cart
                        </button>
                      )}
                    </span>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;

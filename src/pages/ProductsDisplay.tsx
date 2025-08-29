import TitleSection from "../components/TitleComponent/TitleSection";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/features/cart/CartSlice";

function ProductsDisplay() {
  const products = useAppSelector((state) => state.products);
  const categories = useAppSelector((state) => {
    return state.categories;
  });
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((x) => x.id === categoryId);

  const dispatch = useAppDispatch();
  const addItem = (itemId: string, quantity: number) => {
    dispatch(addToCart({ itemId, quantity }));
  };

  return (
    <>
      <TitleSection title={category?.name} />
      <div className="d-flex justify-content-center flex-column py-5">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center pb-5">
            <div
              className="d-flex justify-content-start align-items-start flex-wrap gap-4 px-5 py-2"
              style={{ fontFamily: "Roboto, sans-serif", width: "100%" }}
            >
              {products.map((product) =>
                product.categoryId === category?.id ? (
                  <NavLink
                    key={product.id}
                    className="d-flex flex-column w-25 h-auto mr-1 text-black"
                    to={`/product/${product.id}`}
                    style={{
                      textDecoration: "none",
                      maxWidth: "24%",
                      boxShadow: "1px 1px 2px 0px rgba(0, 0, 0, .1)",
                    }}
                  >
                    <div>
                      <img
                        className="w-100 bg-white h-100"
                        src={product.images[0]}
                        alt=""
                      />
                    </div>
                    <div
                      className="d-flex flex-column justify-content-center text-center gap-1"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      <span style={{ color: "gray" }}>{category.name}</span>
                      <span className="fw-semibold">{product.name}</span>

                      <span
                        className="fw-semibold"
                        style={{ color: "#4a4949ff" }}
                      >
                        {product.price}
                      </span>

                      <span className="d-flex justify-content-center my-3">
                        <button
                          className="btn btn-dark rounded-0 px-4"
                          onClick={() => {
                            if (product.id) addItem(product.id, 1);
                          }}
                        >
                          Add to cart
                        </button>
                      </span>
                    </div>
                  </NavLink>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDisplay;

import { useState, useEffect } from "react";
import "./Products.css";
import { getProductsService } from "./productsService";
import { cartService } from "./productsService";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const cart_data = useSelector((store) => {
    return store.cart;
  });
  const categories = [
    {
      image:
        "https://cdn.textstudio.com/output/sample/normal/9/2/0/5/all-logo-321-5029.png",
      categoryName: "All",
    },
    {
      image:
        "https://tse4.mm.bing.net/th/id/OIP.EE_ndsO6kcX6VmcLnBW97gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3",
      categoryName: "Electronics",
    },
    {
      image:
        "https://th.bing.com/th/id/R.daf855d4d8236832c22bac688a028efe?rik=7yuz474wLdPhJQ&riu=http%3a%2f%2fwrightwaybeautysupply.com%2fcdn%2fshop%2fcollections%2fmen_hair_care_1200x1200.jpg%3fv%3d1676256394&ehk=MKO%2b9%2fJcUvJPb%2fX18u8mpVSq%2fRHScC%2b%2bkC%2bg%2ft9nbqU%3d&risl=&pid=ImgRaw&r=0",
      categoryName: "Mens",
    },
    {
      image:
        "https://th.bing.com/th/id/R.c1e8b76ccc9fc699358fe0a0bdb63b34?rik=JqSIy9p9u%2b91WA&riu=http%3a%2f%2fell.h-cdn.co%2fassets%2f16%2f14%2f1600x800%2flandscape-1459974569-female-designers.jpg&ehk=EOoMjqEdxSRwLj9M64KsGEl1tQ59k469zvcYSvYTRpc%3d&risl=&pid=ImgRaw&r=0",
      categoryName: "Womens",
    },
    {
      image:
        "https://www.cantechonline.com/wp-content/uploads/group-of-kids-with-cans-Tim-Tam-Tummy.jpeg",
      categoryName: "Kids",
    },
    {
      image:
        "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/7/What-is-IKEA-Furniture_0_1200.jpg",
      categoryName: "Furniture",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/028/099/987/large_2x/beauty-cosmetic-makeup-product-brushes-lipstick-nail-polish-collection-on-white-background-generative-ai-free-photo.jpg",
      categoryName: "Cosmetic",
    },
  ];
  const [products, setProducts] = useState(null);
  const [btnText, setBtnText] = useState("Add to Cart");

  useEffect(() => {
    getProductsService(setProducts);
  }, []);

  return (
    <div>
      <div className="categories">
        {categories.map(function (category, index) {
          return (
            <div key={index}>
              <img src={category.image} width={70} height={70} alt="" />
              <h2>{category.categoryName}</h2>
            </div>
          );
        })}
      </div>

      <div className="products">
        {products &&
          products.map((product) => {
            return (
              <div className="product-card" key={product.id}>
                <img src={product.image} width={"100%"} height={230} alt="" />
                <h3>{product.title.slice(0, 21)}</h3>
                <p>$ {product.price}</p>
                <p>{product.description.slice(0, 80)}</p>

                {cart_data.filter((cart) => {
                  return cart.id === product.id;
                }).length > 0 ? (
                  <button id="remove-cart-btn" onClick={() => {}}>
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      cartService(product, setBtnText, dispatch);
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import TitleText from "./TitleText";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../redux/loaderSlice";
import { GetProducts } from "../apiCalls/products";
import { message } from "antd";

export default function LatestCollection() {
  // const { products } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts(null);
      dispatch(setLoader(false));

      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <TitleText text1={"latest"} text2={"collection"} />
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod
          tempora fuga ullam explicabo sint quidem ipsum? Officia dolores iusto
          quod culpa. A reprehenderit ullam modi inventore dolore, error
          excepturi!
        </p>
      </div>

      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.slice(0, 5).map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            image={product.images[0]}
            name={product.product_name}
            category={product.category}
            price={product.asking_price}
          />
        ))}
      </div>
    </div>
  );
}

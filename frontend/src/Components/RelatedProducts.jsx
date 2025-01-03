import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import TitleText from "./TitleText";
import ProductItem from "./ProductItem";
import { message } from "antd";
import { GetProducts } from "../apiCalls/products";

export default function RelatedProducts({ category, seller, currentProduct }) {
  const [products, setProducts] = useState(null);
  const [related, setRelated] = useState(null);

  console.log(products);

  const getData = async () => {
    const filters = {
      category: category,
      seller: seller,
    };

    try {
      const response = await GetProducts(filters);
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (products?.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => item._id !== currentProduct);

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="mt-8 sm:mt-20">
      <div className="text-center text-xl sm:text-3xl">
        <TitleText text1={"related"} text2={"products"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related?.map((product, index) => (
          <ProductItem
            key={index}
            id={product._id}
            name={product.product_name}
            category={product.category}
            delivery={product.deliveryincluded}
            asking_price={product.asking_price}
            image={product.images[0]}
          />
        ))}
      </div>
    </div>
  );
}

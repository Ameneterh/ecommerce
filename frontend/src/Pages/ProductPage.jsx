import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import MainLayout from "../layout/MainLayout";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductPage() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return (
    <MainLayout>
      {productData ? (
        <div className="transition-opacity ease-in duration-500 opacity-100 mt-4">
          {/* product data */}
          <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
            {/* product images */}
            <div className="sm:h-[500px] flex-1 flex flex-col-reverse gap-3 sm:flex-row">
              <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full">
                {productData.image.map((item, index) => (
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    key={index}
                    alt=""
                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md h-[22%] border"
                  />
                ))}
              </div>
              <div className="flex items-center w-full sm:w-[80%] overflow-hidden border rounded">
                <img src={image} alt="" className="w-full h-auto" />
              </div>
            </div>
            {/* product information */}
            <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

              <div className="flex items-center gap-1 mt-2 text-xl text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-500" />
                <p className="text-sm text-gray-400 ml-2">(122)</p>
              </div>
              <p className="flex items-center mt-5 text-xl font-medium">
                {currency}
                {productData.price}
              </p>

              <p className="mt-5 text-gray-500 text-sm">
                {productData.description}
              </p>

              <div className="flex flex-col gap-4 my-8">
                <p>Select Product Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`border py-2 px-4 bg-gray-100 rounded ${
                        item === size ? "border-orange-500" : ""
                      }`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => addToCart(productData._id, size)}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded hover:bg-gray-800"
              >
                ADD TO CART
              </button>

              <hr className="mt-8 sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p>100% Original Product</p>
                <p>Cash on Delivery is Available on this product</p>
                <p>Easy return and exchange policy within 7 days</p>
              </div>
            </div>
          </div>

          {/* description and product review section */}
          <div className="mt-10">
            <div className="flex">
              <p className="border px-5 py-3 text-sm">Description</p>
              <p className="border px-5 py-3 text-sm">Reviews (122)</p>
            </div>
            <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita, asperiores officiis inventore eum voluptas doloribus.
                Culpa, sint molestias? Atque natus non possimus repellendus ipsa
                ut, laudantium placeat mollitia nam fuga!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia inventore voluptates nemo illo blanditiis soluta,
                praesentium est illum? Unde error incidunt ab eius adipisci modi
                itaque consequuntur, dicta tempora nesciunt.
              </p>
            </div>
          </div>

          {/* display related products */}
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      ) : (
        <div className="text-center">No product match found</div>
      )}
    </MainLayout>
  );
}

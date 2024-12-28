import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import MainLayout from "../layout/MainLayout";
import { ShopContext } from "../context/shopContext";
import TitleText from "../components/TitleText";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { setLoader } from "../redux/loaderSlice";
import { GetProducts } from "../apiCalls/products";
import ProductFiltersComponent from "../components/ProductFiltersComponent";

export default function CollectionsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    status: "approved",
    category: [],
    sub_category: [],
  });
  const [showFilters, setShowFilters] = useState(true);

  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const { search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFlterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const getData = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetProducts(filters);
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
    console.log(filters);
    getData();
  }, [filters]);

  return (
    <MainLayout>
      <div className="flex gap-5">
        {showFilters && (
          <ProductFiltersComponent
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-5 items-center">
            {!showFilters && (
              <div
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <p className="text-primary">Filters</p>
                <MdFilterList className="w-5 h-5" />
              </div>
            )}
            <div className="w-full flex items-center relative">
              <input
                type="text"
                placeholder="Search products here ..."
                className="border border-gray-300 rounded-full border-solid pl-8 p-2 h-14 flex-1"
              />
              <IoSearchOutline className="absolute left-2 w-5 h-5" />
            </div>
          </div>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ${
              showFilters
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            }`}
          >
            {products?.map((product, index) => (
              <ProductItem
                key={index}
                id={product._id}
                name={product.product_name}
                category={product.category}
                description={product.product_description}
                delivery={product.deliveryincluded}
                price={product.asking_price}
                image={product.images[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

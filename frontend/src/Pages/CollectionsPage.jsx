import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MainLayout from "../layout/MainLayout";
import { ShopContext } from "../context/shopContext";
import TitleText from "../components/TitleText";
import ProductItem from "../components/ProductItem";

export default function CollectionsPage() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFlterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFlterProducts(productsCopy);
  };

  const sortProducts = () => {
    const filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFlterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFlterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <MainLayout>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10">
        {/* filter options */}
        <div className="min-w-40">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-3 my-2 text-xl cursor-pointer"
          >
            FILTERS{" "}
            <MdOutlineKeyboardArrowRight
              className={`text-xl sm:hidden ${showFilter ? "rotate-90" : ""}`}
            />
          </p>
          {/* category filters */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"gentlemen"}
                  onChange={toggleCategory}
                />{" "}
                Gentlemen
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"ladies"}
                  onChange={toggleCategory}
                />{" "}
                Ladies
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"kids"}
                  onChange={toggleCategory}
                />{" "}
                Kids
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"unisex"}
                  onChange={toggleCategory}
                />{" "}
                Unisex
              </p>
            </div>
          </div>

          {/* sub category filters */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"accessories"}
                  onChange={toggleSubCategory}
                />{" "}
                Accessories
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"bags"}
                  onChange={toggleSubCategory}
                />{" "}
                Bags
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"hair"}
                  onChange={toggleSubCategory}
                />{" "}
                Hair
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"perfume"}
                  onChange={toggleSubCategory}
                />{" "}
                Perfumes
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"shoes"}
                  onChange={toggleSubCategory}
                />{" "}
                Shoes
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"wears"}
                  onChange={toggleSubCategory}
                />{" "}
                Wears
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <TitleText text1={"all"} text2={"collections"} />
            {/* product sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 text-sm px-2 rounded"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* map products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

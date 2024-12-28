import { Input } from "antd";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function ProductFiltersComponent({
  showFilters,
  setShowFilters,
  filters,
  setFilters,
}) {
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

  const categories = [
    {
      name: "Gentlemen",
      value: "gentlemen",
    },
    {
      name: "Ladies",
      value: "ladies",
    },
    {
      name: "Kids",
      value: "kids",
    },
    {
      name: "Unisex",
      value: "unisex",
    },
  ];

  const sub_categories = [
    {
      name: "Accessories",
      value: "accessories",
    },
    {
      name: "Bags",
      value: "bags",
    },
    {
      name: "Hairs",
      value: "hairs",
    },
    {
      name: "Perfumes",
      value: "perfumes",
    },
    {
      name: "Shoes",
      value: "shoes",
    },
    {
      name: "Wears",
      value: "wears",
    },
  ];

  return (
    <div className="max-w-72 flex flex-col">
      <div className="flex justify-between">
        <p className="text-primary">Filters</p>
        <IoClose
          onClick={() => setShowFilters(!showFilters)}
          className="cursor-pointer w-5 h-5 text-red-600"
        />
      </div>

      {/* category filters */}
      <div className="flex flex-col gap-1 mt-3">
        <p className="text-sm font-medium">CATEGORIES</p>
        <div className="flex flex-col gap-1">
          {categories.map((category) => {
            return (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="category"
                  className="max-width"
                  checked={filters.category.includes(category.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        category: [...filters.category, category.value],
                      });
                    } else {
                      setFilters({
                        ...filters,
                        category: filters.category.filter(
                          (item) => item !== category.value
                        ),
                      });
                    }
                  }}
                />
                <label htmlFor="category">{category.name}</label>
              </div>
            );
          })}
        </div>

        <hr className="h-[1.5px] bg-gray-300 my-3" />

        {/* sub categories */}
        <p className="text-sm font-medium">TYPE</p>
        <div className="flex flex-col gap-1">
          {sub_categories.map((sub_category) => {
            return (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="sub_category"
                  className="max-width"
                  checked={filters.sub_category.includes(sub_category.value)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({
                        ...filters,
                        sub_category: [
                          ...filters.sub_category,
                          sub_category.value,
                        ],
                      });
                    } else {
                      setFilters({
                        ...filters,
                        sub_category: filters.sub_category.filter(
                          (item) => item !== sub_category.value
                        ),
                      });
                    }
                  }}
                />
                <label htmlFor="sub_category">{sub_category.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

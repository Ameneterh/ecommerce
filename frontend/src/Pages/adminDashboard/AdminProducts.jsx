import { Button, message, Table } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../redux/loaderSlice";
import { GetProducts, UpdateProductStatus } from "../../apiCalls/products";

export default function AdminProducts() {
  const [showProductForm, setShowProductForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);

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

  const onStatusUpdate = async (status, id) => {
    try {
      dispatch(setLoader(true));
      const response = await UpdateProductStatus(status, id);
      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Product Name",
      dataIndex: "product_name",
    },
    {
      title: "Seller",
      dataIndex: "name",
      render: (text, record) => {
        return record.seller.fullname;
      },
    },
    {
      title: "Product Description",
      dataIndex: "product_description",
      render: (text, record) => {
        return (
          <div className="max-w-4xl line-clamp-3">
            {record.product_description}
          </div>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Sub Category",
      dataIndex: "sub_category",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => {
        return record.status.toUpperCase();
      },
    },
    {
      title: "Added On",
      dataIndex: "createdAt",
      render: (text, record) =>
        moment(record.createdAt).format("DD/MM/YYYY hh:mm A"),
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        const { status, _id } = record;
        return (
          <div className="flex gap-3">
            {status === "pending" && (
              <span
                onClick={() => onStatusUpdate("approved", _id)}
                className="underline cursor-pointer text-green-700"
              >
                Approve
              </span>
            )}
            {status === "pending" && (
              <span
                onClick={() => onStatusUpdate("rejected", _id)}
                className="underline cursor-pointer text-orange-700"
              >
                Reject
              </span>
            )}
            {status === "approved" && (
              <span
                onClick={() => onStatusUpdate("blocked", _id)}
                className="underline cursor-pointer text-red-700"
              >
                Block
              </span>
            )}
            {status === "blocked" && (
              <span
                onClick={() => onStatusUpdate("approved", _id)}
                className="underline cursor-pointer text-green-700"
              >
                Unblock
              </span>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {/* table to show products */}
      <Table columns={columns} dataSource={products} scroll={{ x: 400 }} />
    </div>
  );
}

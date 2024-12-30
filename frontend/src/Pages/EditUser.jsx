import { Modal, Tabs, Form, Input, Row, Col, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../redux/loaderSlice.js";
import { AddProduct, EditProduct } from "../apiCalls/products.js";
import UserImages from "./sellerProfile/UserImages.jsx";

const rules = [
  {
    required: true,
    message: "All fields required!",
  },
];

const additionalThings = [
  {
    label: "Delivery Fee Included",
    name: "deliveryincluded",
  },
  {
    label: "Payment on Delivery",
    name: "payondelivery",
  },
];

export default function EditUser({
  showEditUser,
  setShowEditUser,
  selectedUser,
}) {
  const formRef = React.useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [selectedTab, setSelectedTab] = useState("1");

  useEffect(() => {
    if (selectedUser) {
      formRef.current.setFieldsValue(selectedUser);
    }
  }, [selectedUser]);

  const handleFormSubmit = async (values) => {
    try {
      let response = await EditProduct(selectedUser._id, values);

      dispatch(setLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
        setShowProductForm(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  return (
    <Modal
      title=""
      open={showEditUser}
      onCancel={() => setShowEditUser(false)}
      centered
      okText="Save"
      onOk={() => formRef.current.submit()}
      {...(selectedTab === "2" && { footer: false })}
    >
      <div>
        <h1 className="text-2xl text-center font-semibold text-primary capitalize">
          Edit User Details
        </h1>
        <Tabs
          defaultActiveKey="1"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key)}
        >
          <Tabs.TabPane tab="Product Info" key="1">
            <Form layout="vertical" ref={formRef} onFinish={handleFormSubmit}>
              <Form.Item label="User Full Name" name="fullname" rules={rules}>
                <Input type="text" />
              </Form.Item>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Product Images" key="2" disabled={!selectedUser}>
            <UserImages
              selectedUser={selectedUser}
              setShowEditUser={setShowEditUser}
              // getData={getData}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Modal>
  );
}

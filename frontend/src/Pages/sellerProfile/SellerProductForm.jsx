import { Modal, Tabs, Form, Input, Row, Col, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../redux/loaderSlice";
import { AddProduct, EditProduct } from "../../apiCalls/products";
import ProductImages from "./ProductImages";

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

export default function SellerProductForm({
  showProductForm,
  setShowProductForm,
  selectedProduct,
  getData,
}) {
  const formRef = React.useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [selectedTab, setSelectedTab] = useState("1");

  useEffect(() => {
    if (selectedProduct) {
      formRef.current.setFieldsValue(selectedProduct);
    }
  }, [selectedProduct]);

  const handleFormSubmit = async (values) => {
    try {
      let response = null;

      if (selectedProduct) {
        response = await EditProduct(selectedProduct._id, values);
      } else {
        values.seller = user._id;
        values.status = "pending";
        response = await AddProduct(values);
      }

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
      open={showProductForm}
      onCancel={() => setShowProductForm(false)}
      centered
      okText="Save"
      onOk={() => formRef.current.submit()}
      {...(selectedTab === "2" && { footer: false })}
    >
      <div>
        <h1 className="text-2xl text-center font-semibold text-primary capitalize">
          {selectedProduct ? "Edit Product" : "Add Product"}
        </h1>
        <Tabs
          defaultActiveKey="1"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key)}
        >
          <Tabs.TabPane tab="Product Info" key="1">
            <Form layout="vertical" ref={formRef} onFinish={handleFormSubmit}>
              <Form.Item label="Product Name" name="product_name" rules={rules}>
                <Input type="text" />
              </Form.Item>
              <Form.Item
                label="Product Description"
                name="product_description"
                rules={rules}
              >
                <TextArea type="text" />
              </Form.Item>

              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item
                    label="Asking Price"
                    name="asking_price"
                    rules={rules}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Category"
                    name="category"
                    rules={rules}
                    className="rounded-md"
                  >
                    <select name="" id="">
                      <option value="">Select category</option>
                      <option value="gentlemen">Gentlemen</option>
                      <option value="ladies">Ladies</option>
                      <option value="kids">Kids</option>
                      <option value="general">general</option>
                    </select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Sub Category"
                    name="sub_category"
                    rules={rules}
                  >
                    <select name="" id="">
                      <option value="">Select sub category</option>
                      <option value="accessories">Accessories</option>
                      <option value="cosmetics">Cosmetics</option>
                      <option value="perfumes">Perfumes</option>
                      <option value="shoes">Shoes</option>
                      <option value="bags">Bags</option>
                      <option value="hairs">Hairs</option>
                    </select>
                  </Form.Item>
                </Col>
              </Row>

              <div className="flex gap-10">
                {additionalThings.map((item, index) => {
                  return (
                    <Form.Item
                      label={item.label}
                      name={item.name}
                      key={index}
                      valuePropName="checked"
                    >
                      <Input
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => {
                          formRef.current.setFieldsValue({
                            [item.name]: e.target.checked,
                          });
                        }}
                        checked={formRef.current?.getFieldValue(item.name)}
                      />
                    </Form.Item>
                  );
                })}
              </div>

              <Row>
                <Col span={8}>
                  <Form.Item
                    label="Show Bids on Product Page"
                    name="showBidsOnProductsPage"
                    valuePropName="checked"
                  >
                    <Input
                      type="checkbox"
                      onChange={(e) => {
                        formRef.current.setFieldsValue({
                          showBidsOnProductPage: e.target.checked,
                        });
                      }}
                      checked={formRef.current?.getFieldValue(
                        "showBidsOnProductsPage"
                      )}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="Product Images"
            key="2"
            disabled={!selectedProduct}
          >
            <ProductImages
              selectedProduct={selectedProduct}
              setShowProductForm={setShowProductForm}
              getData={getData}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Modal>
  );
}

import { Modal, Tabs, Form, Input, Row, Col } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

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
}) {
  const formRef = React.useRef(null);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Modal
      title=""
      open={showProductForm}
      onCancel={() => setShowProductForm(false)}
      centered
      okText="Save"
      onOk={() => formRef.current.submit()}
    >
      <Tabs defaultActiveKey="1">
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
              {additionalThings.map((item) => {
                return (
                  <Form.Item label={item.label} name={item.name}>
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
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Product Images" key="2">
          <p>Product Images</p>
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}

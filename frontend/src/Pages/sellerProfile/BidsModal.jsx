import { Form, Input, message, Modal } from "antd";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../../redux/loaderSlice";
import { PlaceNewBid } from "../../apiCalls/products";

export default function BidsModal({
  showBidsModal,
  setShowBidsModal,
  product,
  reloadData,
}) {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const { user } = useSelector((state) => state.users);

  const rules = [
    {
      required: true,
      message: "All fields required!",
    },
  ];

  const handleSubmit = async (values) => {
    try {
      dispatch(setLoader(true));
      const response = await PlaceNewBid({
        ...values,
        product: product._id,
        seller: product.seller._id,
        buyer: user._id,
      });
      dispatch(setLoader(false));
      if (response.success) {
        message.success("New Bid Placed Successfully");
        reloadData();
        setShowBidsModal(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      message.error(error.message);
    }
  };

  return (
    <Modal
      onCancel={() => setShowBidsModal(false)}
      open={showBidsModal}
      centered
      onOk={() => formRef.current.submit()}
    >
      <div className="flex flex-col gap-5 mb-5">
        <h1 className="text-2xl font-semibold text-orange-900 text-center">
          Place New Bid
        </h1>

        <Form layout="vertical" ref={formRef} onFinish={handleSubmit}>
          <Form.Item label="Bid Amount" name="bidAmount" rules={rules}>
            <Input />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={rules}>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

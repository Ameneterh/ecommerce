import React from "react";
import MainLayout from "../layout/MainLayout";
import { Tabs } from "antd";
import SellerProducts from "./sellerProfile/SellerProducts";

export default function SellerProfilePage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="All Products" key="1">
            <SellerProducts />
          </Tabs.TabPane>
          <Tabs.TabPane tab="All Bids" key="2">
            <p>Bids</p>
          </Tabs.TabPane>
          <Tabs.TabPane tab="General" key="3">
            <p>General</p>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </MainLayout>
  );
}

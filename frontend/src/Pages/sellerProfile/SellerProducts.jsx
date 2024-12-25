import { Button } from "antd";
import React, { useState } from "react";
import SellerProductForm from "./SellerProductForm";

export default function SellerProducts() {
  const [showProductForm, setShowProductForm] = useState(false);

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={() => setShowProductForm(true)} type="default">
          Add Product
        </Button>
      </div>

      {showProductForm && (
        <SellerProductForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
        />
      )}
    </div>
  );
}

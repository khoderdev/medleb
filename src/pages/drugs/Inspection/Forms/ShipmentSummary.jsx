import React from "react";

const ShipmentSummary = ({ formData, batchesQty, batchComponents }) => {
  return (
    <div className="shipment-summary">
      <h2>Shipment Summary</h2>
      <div>
        <h3>Shipment Form Data:</h3>
        <p>Batch Barcode: {formData.batchBarcode}</p>
        <p>Batch Serials: {formData.batchSerials.join(", ")}</p>
      </div>
      <div>
        <h3>Batches Quantity:</h3>
        <p>{batchesQty}</p>
      </div>
      <div>
        {/* <h3>Batch Components:</h3> */}
        {batchComponents?.length > 0 ? (
          <ul>
            {batchComponents.map((batch, index) => (
              <li key={index}>
                <strong>Batch {index + 1}:</strong>
                <p>Batch Number: {batch.batchNumber}</p>
                <p>Production Date: {batch.productionDate}</p>
                <p>Expiry Date: {batch.expiryDate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No batch components added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ShipmentSummary;

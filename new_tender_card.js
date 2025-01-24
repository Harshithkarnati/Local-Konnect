import React from 'react';
import './new_tender_card.css';

function BidCard() {
  return (
    <div className="bid-card">
      {/* Card Header */}
      <div className="card-header">
        <div className="user-id">
          <span>User ID:</span>
          <strong>12345</strong>
        </div>
        <div className="service-name">
          <span>Service Name:</span>
          <strong>Plumbing Services</strong>
        </div>
      </div>

      {/* Table Section */}
      <div className="card-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Units</th>
              <th>Per Unit Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Parameter 1</td>
              <td>5</td>
              <td>kg</td>
              <td><input type="text" className="editable-input" placeholder="Enter cost" /></td>
            </tr>
            <tr>
              <td>Parameter 2</td>
              <td>10</td>
              <td>kg</td>
              <td><input type="text" className="editable-input" placeholder="Enter cost" /></td>
            </tr>
            <tr>
              <td>Parameter 3</td>
              <td>15</td>
              <td>kg</td>
              <td><input type="text" className="editable-input" placeholder="Enter cost" /></td>
            </tr>
            <tr>
              <td>Parameter 4</td>
              <td>20</td>
              <td>kg</td>
              <td><input type="text" className="editable-input" placeholder="Enter cost" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="card-footer">
        <div className="details">
          <p>Max Days Limit: <span>30</span> days</p>
          <p>Your Limit: <span>15</span> days</p>
          <p>Extra Benefits List</p>
          <p>User Address</p>
        </div>
        <div className="time-left">
          <div className="time-circle">
            <span>14:36</span>
            <small>min</small>
          </div>
        </div>
      </div>

      {/* Total Section */}
      <div className="card-total">
        <hr />
        <p>Total Bid Value: <span>₹ 10,000 /-</span></p>
        <hr />
      </div>
    </div>
  );
}

export default BidCard;

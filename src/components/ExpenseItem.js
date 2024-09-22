import React, { useState } from 'react';
import './ExpenseItem.css'; // Assuming you want custom styles here

const ExpenseItem = ({ expense, onDeleteExpense }) => {
  const [quantity, setQuantity] = useState(expense.quantity || 1);
  const [pricePerUnit, setPricePerUnit] = useState(expense.price || 0);
  const [percentageMarkup, setPercentageMarkup] = useState(expense.percentageMarkup || 0);
  
  const total = (pricePerUnit + (pricePerUnit * percentageMarkup / 100)) * quantity;

  return (
    <div className="expense-item">
      <div className="description">{expense.name}</div>

      <input
        type="number"
        className="input-quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseFloat(e.target.value))}
      />

      <div className="unit">Price </div>

      <input
        type="number"
        className="input-price"
        value={pricePerUnit}
        onChange={(e) => setPricePerUnit(parseFloat(e.target.value))}
      />

      <div className="unit">€</div>

      <input
        type="number"
        className="input-percentage"
        value={percentageMarkup}
        onChange={(e) => setPercentageMarkup(parseFloat(e.target.value))}
      />

      <div className="unit">%</div>

      <div className="total-price">{total.toFixed(2)}€</div>

      {/* Cross icon for deleting */}
      <div className="delete-icon" onClick={() => onDeleteExpense(expense.id)}>
        &#10006; {/* Unicode for cross (X) */}
      </div>
    </div>
  );
};

export default ExpenseItem;

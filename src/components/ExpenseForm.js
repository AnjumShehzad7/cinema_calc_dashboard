import React, { useState } from 'react';
import './ExpenseForm.css';  // Assuming you have custom styles here

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [percentageMarkup, setPercentageMarkup] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      name,
      price: parseFloat(price),
      percentageMarkup: parseFloat(percentageMarkup)
    };
    onAddExpense(newExpense);
    setName('');
    setPrice('');
    setPercentageMarkup('');
  };

  return (
    <div className="expense-form-wrapper">
      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          className="input-field"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          className="input-field"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          className="input-field"
          placeholder="Percentage Markup"
          value={percentageMarkup}
          onChange={(e) => setPercentageMarkup(e.target.value)}
          required
        />
        <button type="submit" className="btn add-expense-btn">Add Expense</button>
      </form>

      {/* Add a wrapper around the Close button */}
      <div className="close-button-container">
        <button onClick={() => window.location.reload()} className="btn close-btn">Close</button>
      </div>
    </div>
  );
};

export default ExpenseForm;

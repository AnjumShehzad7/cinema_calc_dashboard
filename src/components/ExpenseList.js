import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseItem from "./ExpenseItem";
import Modal from "react-modal";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseList.css"; // Import the CSS file
// import dotenv from "dotenv";
// import path from "path"
// dotenv.config({ path: path.join(__dirname, ".env") });

Modal.setAppElement("#root"); // Set the root element for accessibility

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}/api/expense`
      );
      setExpenses(response.data.expensesList);
      setTotalExpenses(response.data.totalExpenses);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handleAddExpense = async (newExpense) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}/api/expense`, newExpense);
      fetchExpenses(); // Refresh the list after adding
      setModalIsOpen(false); // Close the modal after adding the expense
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}/api/expense/${id}`);
      fetchExpenses(); // Refresh the list after deleting
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="expense-list">
      <h1>Expense List</h1>

      <div className="button-container">
        <button onClick={() => setModalIsOpen(true)}>Add new Point</button>
      </div>

      <div className="expense-grid">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDeleteExpense={handleDeleteExpense}
          />
        ))}
      </div>

      <h2>Total Expenses: {totalExpenses.toFixed(2)}</h2>

      {/* Modal for adding expense */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="add-new-expense-text">Add New Expense</div>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </Modal>
    </div>
  );
};

export default ExpenseList;

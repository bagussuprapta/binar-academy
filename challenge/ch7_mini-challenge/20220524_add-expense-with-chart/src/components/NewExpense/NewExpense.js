import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isAddNewData, setIsAddNewData] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
  }

  const startAddNewData = () => {
    setIsAddNewData(true);
  }

  const cancelAddNewData = () => {
    setIsAddNewData(false);
  }

  return (
    <div className='new-expense'>
      {!isAddNewData && <button onClick={startAddNewData}>Add New Expense</button>}
      {isAddNewData && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddNewData} />}
    </div>
  )
}

export default NewExpense;

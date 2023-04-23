import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
import React from "react";
  const ExpensesList = props =>{

    // let expenseContent = <p>No Expenses Found</p>;

  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Found No expenses</h2>;
    
  }
    return <ul className='expenses-list'>
           { props.items.map((expense)=>(
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      ></ExpenseItem>
           ))}
    </ul>

  }
  export default ExpensesList;
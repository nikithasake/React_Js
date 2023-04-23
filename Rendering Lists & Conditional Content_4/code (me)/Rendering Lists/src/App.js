import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import React from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "News Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2",
   title: "New TV",
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Chair",
    amount: 950,
    date: new Date(2003, 3, 15),
  },
];
const App=()=> { 
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

//    return React.createElement('div',{},
//   React.createElement('h2',{},"lets get started"),
//   React.createElement(Expenses,{items:expenses})
//  );

const addExpenseHandler= (expense) => {
  //console.log('App.js')
  //console.log(expense);
  setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses];
  });
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
};
export default App;

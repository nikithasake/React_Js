import React,{useState} from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
const Expenses=(props)=>{

  const [FilteredYear,setFilteredYear]=useState('2020')
  const filterChangeHandler=selectedYear=>{
      //console.log(selectedYear);
      setFilteredYear(selectedYear)
  }

  const filterExpenses=props.items.filter(expense => {
    return expense.date.getFullYear().toString() === FilteredYear;
  })
  
   return(
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={FilteredYear} onChangeFilter={filterChangeHandler} />
      {/* {expenseContent} */}
      <ExpenseChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses}/>
{/* 
      {filterExpenses.length === 0 ? (
         <p> No expenses found.</p>
         ):( */}
        {/* {filterExpenses.length === 0 && <p> No Expenses found</p>}
         {filterExpenses.length >0 && 
      filterExpenses.map((expense)=>(
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      ></ExpenseItem>
      ))
    } */}
       {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}  
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
    </div>
   );}
export default Expenses;
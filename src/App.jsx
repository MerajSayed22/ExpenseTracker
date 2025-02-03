import "./index.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useState } from "react";

function App() {
  const [expense,setExpense] = useState([]);
  return (
    <>
      <div className="MainContainer">

        <div className="title text-3xl m-4">Track Your Expense</div>

        <div className="container flex justify-start">

          <ExpenseForm setExpense={setExpense}/>


          <ExpenseTable expense={expense}/>

        </div>
      </div>
    </>
  );
}

export default App;

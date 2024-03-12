import { useState } from "react";
import "./App.css";
import Child from "./Child";
import Display from "./Display";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterOne from "./RouteOne";

function App() {
  const [expenseArr, setExpenseArr] = useState([
    { id: 1, expense: "hotel", amount: 5000 },
  ]);
  const [expense, setExpenseName] = useState("");
  const [amount, setExpenseAmount] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [index, setIndex] = useState();

  function editExpense(index) {
    setEdit(true);
    setIndex(index);
    var obj = [...expenseArr];
    setExpenseName(obj[index].expense);
    setExpenseAmount(obj[index].amount);
  }
  function deleteExpense(index) {
    var obj = [...expenseArr];
    obj.splice(index, 1);
    setExpenseArr(obj);
  }

  function onExpenseSubmit(expense_name, expense_amt) {
    if (isEdit) {
      var obj = [...expenseArr];
      obj[index].expense = expense_name;
      obj[index].amount = expense_amt;
      setExpenseArr(obj);
      setEdit(false);
    } else {
      console.log("In onExpenseSubmit");
      var obj = {
        id:
          expenseArr.length > 0 ? expenseArr[expenseArr.length - 1].id + 1 : 1,
        expense: expense_name,
        amount: parseInt(expense_amt),
      };

      setExpenseArr([...expenseArr, obj]);
    }
  }
  var Income=0, Expense=0;
  expenseArr.forEach((value) => {
    if (value.amount > 0) {
      Income += value.amount;
    } else {
      Expense += value.amount
    }
  })
  return (
    <>
      <h1>Expense-Tracker</h1>
      <div>
        <div className="balance">Balance: {Income + Expense}</div>
        <div className="income-expense-container">
          <div className="income">
            <span className="title">Income</span>
            <span>{Income}</span>
          </div>
          <div className="block"></div>
          <div className="expense">
            <span className="title">Expense</span>
            <span>{Expense}</span>
          </div>
        </div>
      </div>
      <div className="income">
        <p>Income</p>
      </div>

      <Child
        onExpenseSubmit={onExpenseSubmit}
        expense={expense}
        amount={amount}
        
      />
      <h1>Expenses</h1>
      {expenseArr.map((value, index) => (
        <Display
          id={value.id}
          expense={value.expense}
          amount={value.amount}
          index={index}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      ))}

      {/* <div>
        
          <Routes>
            <Route path="routeone" element={<RouterOne/>}></Route>
          </Routes>
       
      </div> */}
    </>
  );
}

export default App;

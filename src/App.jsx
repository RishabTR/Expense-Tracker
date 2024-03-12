import { useState } from "react";
import "./App.css";
import Child from "./Child";
import Display from "./Display";

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
        amount: expense_amt,
      };

      setExpenseArr([...expenseArr, obj]);
      
    }
  }
  var ttl_income,ttl_expense;
  return (
    <>
      <h1>Expense-Tracker</h1>
      <h3>Balance:{}</h3>
      {expenseArr.map((value, index) => {
        if (value.amount > 0) {
          ttl_income +=value.amount;
        }
        else
          ttl_expense +=value.amount;
      })}

      <Child
        onExpenseSubmit={onExpenseSubmit}
        expense={expense}
        amount={amount}
        ttl_expense={ttl_expense}
        ttl_income={ttl_income}
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
    </>
  );
}

export default App;

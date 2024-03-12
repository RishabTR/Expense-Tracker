import { useEffect, useState } from "react";

function Child(props) {
  console.log(props);
  const [expense_name, setExpenseName] = useState("");
  const [expense_amt, setExpenseAmt] = useState();

  useEffect(() => {
    console.log("In useEffect of Child");
    setExpenseName(props.expense);
    setExpenseAmt(props.amount);
  }, [props.expense, props.amount]);

  function onHandleNameChange(e) {
    setExpenseName(e.target.value);
    console.log(expense_name);
  }

  function onHandleAmtChange(e) {
    setExpenseAmt(e.target.value);
    console.log(expense_amt);
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    console.log("In Child");
    props.onExpenseSubmit(expense_name, expense_amt);
  }

  return (
    <>
      <form>
        <p>
          <input
            type="text"
            placeholder="Expense-Name"
            value={expense_name}
            onChange={onHandleNameChange}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Amount"
            value={expense_amt}
            onChange={onHandleAmtChange}
          ></input>
        </p>
        <button type="submit" onClick={onHandleSubmit}>
          Add Bill
        </button>
      </form>
    </>
  );
}

export default Child;

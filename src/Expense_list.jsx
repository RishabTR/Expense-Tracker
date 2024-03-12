function Expense_list(props) {
  const expense_arr = props.expenseList;
  expense_arr.map((data) => {
    console.log(data.id);
  });
}

export default Expense_list;

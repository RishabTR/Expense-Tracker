function Display(props) {

    const { id, amount, expense, index,deleteExpense,editExpense} = props;

    function deleteIndex(index){
        deleteExpense(index);
    }

    function editIndex(index){
        editExpense(index);
    }
    return (
        <>
            <div className="expense-item-container">
                <div className={`expense-item ${amount > 0 ? "positive" : "negative"}`}>
                    <div className="expense-title">{expense}</div>
                    <div className="expense-amount">{amount}</div>
                </div>
                <button className="delete-btn" onClick={()=>deleteIndex(index)}>Delete</button>
                <button className="delete-btn" onClick={()=>editIndex(index)}>Edit</button>
            </div>

        </>

    )

}
export default Display;

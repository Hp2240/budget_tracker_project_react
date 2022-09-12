const IncomeExpense = () => {
  return (
    <div className="income-expense-container">
      <div>
        <h4>Income</h4>
        <p id="plus" className="money-plus">
          +$.0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="minus" className="money-minus">
          -$0.00
        </p>
      </div>
    </div>
  )
}

export default IncomeExpense

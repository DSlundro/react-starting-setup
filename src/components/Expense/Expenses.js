import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter( expense => 
        expense.date.getFullYear().toString() === filteredYear)

    return (
        <div className="my__container">
            <Card className="bg-black px-5 py-3">
                <ExpensesFilter 
                selected={filteredYear}
                onChangeHandler={filterChangeHandler}/>
                
                <ExpensesList 
                items={filteredExpenses}/>
            </Card>
        </div>
    );
}
export default Expenses;
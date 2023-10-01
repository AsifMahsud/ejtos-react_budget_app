import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);

    const { budget, expenses, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (newBudget > 20000) {
            alert("The budget cannot exceed funds  £ 20,000");
            return;
        }

        if (newBudget < totalExpenses) {
            alert("The budget cannot be less than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
            </span>
        </div>
    );
};
export default Budget;

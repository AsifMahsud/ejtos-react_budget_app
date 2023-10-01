import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function CurrencyDropdown() {

    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className="alert alert-success">
            <select
                className="form-control"
                value={currency}
                onChange={handleCurrencyChange}
            >
                <option value="">Select Currency</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
}

export default CurrencyDropdown;

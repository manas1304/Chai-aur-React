

function InputBox({
    label, // Text above input field - from curr and to curr will be taken from here
    amount, // Current value in the input
    onAmountChange, // Function called when the amount changes(or user types amount)
    onCurrencyChange, // Function called when currency dropdown changes
    currencyOptions =[], // Array of Currencies in the dropdown ( by default it is empty)
    selectCurrency, // Currently selected currency
    amountDisable, // Disable the 'to' input so that user can't change the to value
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => (onAmountChange && onAmountChange(Number(e.target.value)))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

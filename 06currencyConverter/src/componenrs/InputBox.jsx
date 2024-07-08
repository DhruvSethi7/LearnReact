import React, { useId } from 'react'

function InputBox(
    {
        amount,
    currency,
    disabled=false,
    label,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[]
    }
) {
    const inputId=useId()
    console.log('Length is ',currencyOptions.length);
    console.log(label);
    console.log(currency);
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
            <label  htmlFor={inputId} className="text-black/40 mb-2 inline-block">
                {label}
            </label>
            <input
                id={inputId}
                className="outline-none w-full bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                disabled={disabled}
                value={amount}
                onChange={(e)=>{}}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={currency}
                onChange={()=>onCurrencyChange&&onCurrencyChange(currency)}
            >
                {currencyOptions.map((curren)=>
                (
                    <option key={curren} value={curren}>   
                        {curren}
                    </option>
                )
                )}
            </select>
        </div>
    </div>
);
}

export default InputBox